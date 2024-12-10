import "./ItemEditor.less"
import { useCallback, useEffect, useState } from "preact/hooks";
import { IconButton } from "./IconButton"
import { TextInput } from "./TextInput";
import { storage } from "./ShoppingItemStorage";
import { CategoryChooser } from "./CategoryChooser";
import { ShoppingItem } from "./ShoppingItem";

/** Props for the `ItemEditor` component. */
export type ItemEditorProps = {
    /** Whether the editor is open. */
    isOpen?: boolean;
    /** Function to be called when the editor's close button is clicked. */
    onClose?: () => void;
    /** The edited item. */
    editedItem?: ShoppingItem
}

/**
 * ItemEditor component allows for creating and editing items in a shopping list.
 *
 * @param props The props for the component.
 * @param props.isOpen Whether the editor is open.
 * @param props.onClose Function to be called when the editor's close button is clicked.
 * @param props.editedItem The edited item.
 * 
 * @returns The rendered component or null if not open.
 */
export function ItemEditor({ isOpen, onClose, editedItem }: Readonly<ItemEditorProps>) {
    if (!isOpen) return null;
    let title = editedItem ? "Edit item" : "New item";

    /** State to keep track of the item's name. */
    let [name, setName] = useState(editedItem ? editedItem.name : "");
    /** State to keep track of the item's category. */
    let [categoryName, setCategory] = useState(editedItem ? editedItem.categoryName : "");

    /** Effect to update the name and category, when the editedItem prop changes. */
    useEffect(() => {
        if (editedItem) {
            setName(editedItem.name);
            setCategory(editedItem.categoryName);
        } else {
            setName("");
            setCategory("");
        }
    }, [editedItem]);

    let reset = useCallback(() => {
        setName("");
        setCategory("");
    }, []);

    /**
     * Function to be called when the save button is clicked.
     * It either updates the edited item or adds a new item to the storage.
     */
    let save = useCallback(() => {
        if (editedItem) {
            storage.updateItem(editedItem.id, { name, categoryName, checked: editedItem.checked });
        } else {
            storage.addItem({ name, categoryName, checked: false });
        }
        reset();
        onClose?.();
    }, [editedItem, name, categoryName, onClose, reset]);

    return <div class="ItemEditor">
        <div class="top">
            <h2>{title}</h2>
            <IconButton iconName="close" onClick={onClose} />
        </div>
        <div class="content">
            <div class="nameInput">
                <TextInput placeholder="Item name" value={name} onChange={setName} onEnter={() => { }} />
            </div>

            <CategoryChooser onCategoryClick={setCategory} selectedCategory={categoryName} />
        </div>
        <div class="bottom">
            <IconButton iconName="check" onClick={save} />
        </div>
    </div>
}