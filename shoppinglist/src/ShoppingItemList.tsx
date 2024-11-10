import "./ShoppingItemList.less"
import { useEffect, useState } from "preact/hooks";
import { IconButton } from "./IconButton";

export function ShoppingItemList({onAddClick}) {
    let [items, setItems] = useState([]);


    return <div class="ShoppingItemList">
    {items.length === 0 ? (
        <div class="emptyList">
            <h2>No items yet. You can start adding them by pressing</h2>
            <IconButton iconName="add" onClick={onAddClick}/>
            <h2>this button.</h2>
        </div>
    ) : (
        null
    )}
    </div>
}