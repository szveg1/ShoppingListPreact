import { useState } from "preact/hooks";
import "./Main.less"
import { ShoppingItemList } from "./ShoppingItemList";
import { TopBar } from "./TopBar";
import { ItemEditor} from "./ItemEditor";
import { ShoppingItem } from "./ShoppingItem";

/**
 * The `Main` component serves as the primary container for the shopping list application.
 * It includes the top bar, the shopping item list, and a modal window for adding new items.
 *
 *
 * @returns {JSX.Element} The rendered main component.
 */
export function Main() {
    let [isEditorOpen, setEditorOpen] = useState(false)
    let [editedItem, setEditedItem] = useState<ShoppingItem | null>(null)

    let handleEdit = (item: ShoppingItem) => {
        setEditedItem(item)
        setEditorOpen(true)
    }

    let handleClose = () => {
        setEditedItem(null)
        setEditorOpen(false)
    }

    return <div class="Main">
        <TopBar />
        <ShoppingItemList onAddClick={() => setEditorOpen(true)} onEditItem={handleEdit} />
        <ItemEditor isOpen={isEditorOpen} onClose={handleClose} editedItem={editedItem} />
    </div>
}