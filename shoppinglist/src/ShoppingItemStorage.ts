import Dexie, { type EntityTable } from "dexie";
import { ShoppingItem } from "./ShoppingItem";
import { useLiveQuery } from "dexie-react-hooks";

/**
 * A class to store shopping items in the browser.
 * 
 * It uses {@link https://dexie.org/ | Dexie } to store the items in IndexedDB.
 */
class ShoppingItemStorage {
    /** The database instance */
    readonly #db: Dexie & { shoppingItems: EntityTable<ShoppingItem, 'id'>; };

    /**
     * Creates a new instance of the storage.
     * 
     * It initializes the database and creates the table for the shopping items.
     */
    constructor() {
        this.#db = new Dexie('ShoppingItemStorage') as Dexie & {
            shoppingItems: EntityTable<ShoppingItem, 'id'>;
        };
        this.#db.version(1).stores({
            shoppingItems: '++id, name, category, checked'
        });
    }
    
    /**
     * Function for adding a new item to the storage.
     * 
     * @param props The properties of the item to be added.
     * @param props.name The name of the item.
     * @param props.categoryName The name of the category.
     * @param props.checked Whether the item is checked. 
     */
    async addItem({ name, categoryName, checked }: ShoppingItem) {
        try {
            const id = await this.#db.shoppingItems.add({
                name,
                categoryName,
                checked
            })
        } catch (error) {
            console.error(`Failed to add item ${name}: ${error}`);
        }
    }

    /**
     * Function to get all items from the storage.
     * 
     * @returns An array of all `ShoppingItem` objects in the storage. 
     */
    getAllItems(): ShoppingItem[] {
        const items = useLiveQuery(
            () => this.#db.shoppingItems.toArray()
        )
        return items;
    }

    /**
     * Function to get all items that start with a given name.
     * 
     * @param name The name to search for.
     * @returns An array of all `ShoppingItem` objects in the storage that start with the given name. 
     */
    getAllStartingWith(name: string): ShoppingItem[] {
        if (name == "") return null
        const items = useLiveQuery(
            async () => {
                const items = await this.#db.shoppingItems
                    .where("name")
                    .startsWithIgnoreCase(name)
                    .toArray()
                return items;
            },
            [name]
        );
        return items;
    }

    /**
     * Function to update an item in the storage.
     * @param id - The id of the item to update.
     * @param props - The properties of the item to update.
     * @param props.name - The new name of the item.
     * @param props.categoryName - The new category name of the item.
     * @param props.checked - Whether the item is checked. 
     */
    async updateItem(id: number, { name, categoryName, checked }: ShoppingItem) {
        await this.#db.shoppingItems.put(
            {
                id,
                name,
                categoryName,
                checked
            });
    }

    /**
     * Deletes an item from the storage.
     * 
     * @param id - The id of the item to delete.
     */
    async deleteItem(id: number) {
        await this.#db.shoppingItems.delete(id);
    }
}

/**
 * The storage instance used to store shopping items.
*/
const storage = new ShoppingItemStorage();
export { storage };