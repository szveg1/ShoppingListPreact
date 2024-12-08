import { useState } from "preact/hooks"
import { IconButton } from "./IconButton"
import { MaterialIcon } from "./MaterialIcon"
import { shoppingCategories } from "./ShoppingCategories"
import { ShoppingItem } from "./ShoppingItem"
import "./ShoppingItemCard.less"
import { storage } from "./ShoppingItemStorage"

export type ShoppingItemCardProps = ShoppingItem & {
    onEdit: ({ ...shoppingItem }: ShoppingItem) => void;
}

export function ShoppingItemCard({ id, name, categoryName, checked, onEdit }: Readonly<ShoppingItemCardProps>) {
    let [isChecked, setChecked] = useState(checked);
    let iconName;
    shoppingCategories.forEach(category => {
        if (category.name == categoryName) iconName = category.iconName
    })

    let onCheckClick = () => {
        setChecked(!isChecked)
        storage.updateItem(id, { name, categoryName, checked: !checked })
    }

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