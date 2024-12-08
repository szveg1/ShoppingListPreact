import "./ShoppingItemList.less"
import { IconButton } from "./IconButton";
import { ShoppingItemCard } from "./ShoppingItemCard";
import { storage } from "./ShoppingItemStorage";
import { ShoppingItem } from "./ShoppingItem";

/**
 * Props for the ShoppingItemList component.
 */
export type ShoppingItemListProps = {
    /**
     * Callback function to handle the event when the add button is clicked.
     */
    onAddClick: () => void;

    /**
     * Callback function to handle the event when an item is edited.
     * @param item - The shopping item that is being edited.
     */
    onEditItem: (item: ShoppingItem) => void;
}

/**
 * Component that renders a list of shopping items.
 * 
 * @param {Readonly<ShoppingItemListProps>} props - The properties for the component.
 * @param {function} props.onAddClick - Callback function to handle the event when the add button is clicked.
 * @param {function} props.onEditItem - Callback function to handle the event when an item is edited.
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * The component displays a message and an add button if there are no items.
 * If there are items, it displays a list of `ShoppingItemCard` components and an add button at the bottom.
 */
export function ShoppingItemList({ onAddClick, onEditItem }: Readonly<ShoppingItemListProps>) {
    let items = storage.getAllItems();

    return <div class="ShoppingItemList">
        {
            (!items || items?.length === 0) && <div class="emptyList">
                <h2>No items yet. You can start adding them by pressing</h2>
                <IconButton iconName="add" onClick={onAddClick} />
                <h2>this button.</h2>
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