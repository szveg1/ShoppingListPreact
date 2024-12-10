import "./Main.less"
import { useCallback, useState } from "preact/hooks";
import { ShoppingItemList } from "./ShoppingItemList";
import { TopBar } from "./TopBar";
import { ItemEditor } from "./ItemEditor";
import { ShoppingItem } from "./ShoppingItem";


/**
 * The `Main` component serves as the primary container for the shopping list application.
 * It manages the state for whether the item editor is open and which item is being edited.
 * 
 * 
 * @returns The rendered component.
 * 
 */
export function Main() {
    let [isEditorOpen, setEditorOpen] = useState(false)
    let [editedItem, setEditedItem] = useState<ShoppingItem | null>(null)

    let handleEdit = useCallback((item: ShoppingItem) => {
        setEditedItem(item)
        setEditorOpen(true)
    }, [])

    let handleClose = useCallback(() => {
        setEditorOpen(false)
        setEditedItem(null)
    }, [])

    return <div class="Main">
        <TopBar onEditItem={handleEdit} />
        <ShoppingItemList onAddClick={() => setEditorOpen(true)} onEditItem={handleEdit} />
        <ItemEditor isOpen={isEditorOpen} onClose={handleClose} editedItem={editedItem} />
    </div>
}