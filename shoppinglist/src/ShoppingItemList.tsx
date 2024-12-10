import "./ShoppingItemList.less"
import { IconButton } from "./IconButton";
import { ShoppingItemCard } from "./ShoppingItemCard";
import { storage } from "./ShoppingItemStorage";
import { ShoppingItem } from "./ShoppingItem";

/** Props for the `ShoppingItemList` component */
export type ShoppingItemListProps = {
    /** Function to be called when the add button is clicked. */
    onAddClick: () => void;

    /** Function to be called when an item's edit button is clicked. */
    onEditItem: (item: ShoppingItem) => void;
}

/**
 * Renders the list of shopping item's currently in the list.
 * 
 * @param props The props for the component.
 * @param props.onAddClick Function to be called when the add button is clicked.
 * @param props.onEditItem Function to be called when an item's edit button is clicked.
 * 
 * @returns A list of shopping items, if there are any. Otherwise, a message to add items. 
 */
export function ShoppingItemList({ onAddClick, onEditItem }: Readonly<ShoppingItemListProps>) {
    let items = storage.getAllItems();

    return <div class="ShoppingItemList">
        {
            (!items || items?.length === 0) && <div class="emptyList">
                    No items yet. You can start adding them by pressing this button.
                    <IconButton iconName="add" onClick={onAddClick} />
            </div>
        }
        {(items && items.length > 0) && <>
            <div class="list">
                {items.map((item) => (
                    <ShoppingItemCard
                        id={item.id}
                        name={item.name}
                        categoryName={item.categoryName}
                        checked={item.checked}
                        onEdit={() => onEditItem(item)}>
                    </ShoppingItemCard>
                ))}
            </div>
            <div class="bottombar">
                <IconButton iconName="add" onClick={onAddClick} />
            </div>
        </>
        }
    </div>
}