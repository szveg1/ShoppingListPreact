import { useEffect, useState } from "preact/hooks";
import { IconButton } from "./IconButton"
import "./ItemEditor.less"
import { TextInput } from "./TextInput";
import { storage } from "./ShoppingItemStorage";
import { CategoryChooser } from "./CategoryChooser";
import { ShoppingItem } from "./ShoppingItem";


export type ItemEditorProps = {
    isOpen?: boolean;
    onClose?: () => void;
    editedItem?: ShoppingItem
}

export function ItemEditor({ isOpen, onClose, editedItem }: Readonly<ItemEditorProps>) {
    if (!isOpen) return null
    let title = editedItem ? "Edit item" : "New item"

    let [name, setName] = useState(editedItem ? editedItem.name : "")
    let [categoryName, setCategory] = useState(editedItem ? editedItem.categoryName : "")

    useEffect(() => {
        if (editedItem) {
            setName(editedItem.name);
            setCategory(editedItem.categoryName);
        } else {
            setName("");
            setCategory("");
        }
    }, [editedItem]);

    let reset = () => { setName(""); setCategory(""); };
    let save = () => {
        if (editedItem) {
            storage.updateItem(editedItem.id, { name, categoryName, checked: editedItem.checked });
        } else {
            storage.addItem({ name, categoryName, checked: false });
        }
        reset();
        onClose();
    }

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