import "./ShoppingItemCard.less"
import { useCallback, useState } from "preact/hooks"
import { IconButton } from "./IconButton"
import { MaterialIcon } from "./MaterialIcon"
import { shoppingCategories } from "./ShoppingCategories"
import { ShoppingItem } from "./ShoppingItem"
import { storage } from "./ShoppingItemStorage"

/** Props for the `ShoppingItemCard` component, which represents a `ShoppingItem` object. */
export type ShoppingItemCardProps = ShoppingItem & {
    /**
     * Function to be called when the edit button is clicked.
     * 
     * @param shoppingItem The shopping item to be edited.
     */
    onEdit: ({ ...shoppingItem }: ShoppingItem) => void;
}

/**
 *  Renders a card for a shopping item.
 *
 * @param props The props for the component.
 * @param props.id The id of the shopping item.
 * @param props.name The name of the shopping item.
 * @param props.categoryName The category name of the shopping item.
 * @param props.checked Whether the shopping item is checked.
 * @param props.onEdit Function to be called when the edit button is clicked.
 *  
 * @returns A div element with the shopping item card.
 */
export function ShoppingItemCard({ id, name, categoryName, checked, onEdit }: Readonly<ShoppingItemCardProps>) {
    let [isChecked, setChecked] = useState(checked);
    let iconName;
    shoppingCategories.forEach(category => {
        if (category.name == categoryName) iconName = category.iconName
    })

    /**
     * Function to be called when the check button is clicked.
     * It toggles the checked state of the item, and updates it's state in the storage.
     */
    let onCheckClick = useCallback(() => {
        setChecked(!isChecked);
        storage.updateItem(id, { name, categoryName, checked: !isChecked });
    }, [isChecked, id, name, categoryName]);

    return <div class="ShoppingItemCard">
        <div class="content">
            <h2 class={`${isChecked ? 'checked' : ''}`}>
                {name}
            </h2>
            <MaterialIcon iconName={iconName}></MaterialIcon>
        </div>
        <div class="buttons">
            <IconButton iconName="check" onClick={onCheckClick}></IconButton>
            <IconButton iconName="edit" onClick={() => onEdit({ id, name, categoryName, checked })}></IconButton>
            <IconButton iconName="delete" onClick={() => storage.deleteItem(id)}></IconButton>
        </div>
    </div>
}