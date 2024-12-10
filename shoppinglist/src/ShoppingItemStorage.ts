import Dexie, { type EntityTable } from "dexie";
import { ShoppingItem } from "./ShoppingItem";
import { useLiveQuery } from "dexie-react-hooks";

class ShoppingItemStorage {
    #db: Dexie & { shoppingItems: EntityTable<ShoppingItem, 'id'>; };

    constructor() {
        this.#db = new Dexie('ShoppingItemStorage') as Dexie & {
            shoppingItems: EntityTable<ShoppingItem, 'id'>;
        };
        this.#db.version(1).stores({
            shoppingItems: '++id, name, category, checked'
        });
    }

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

    getAllItems(): ShoppingItem[] {
        const items = useLiveQuery(
            () => this.#db.shoppingItems.toArray()
        )
        return items;
    }

    getAllStartingWith(name: string): ShoppingItem[] {
        if (name == "") return null
        const items = useLiveQuery(
            async () => {
                const items = await this.#db.shoppingItems
                    .where("name")
                    .startsWith(name)
                    .toArray()
                return items;
            },
            [name]
        );
        return items;
    }

    async updateItem(id: number, { name, categoryName, checked }: ShoppingItem) {
        await this.#db.shoppingItems.put(
            {
                id,
                name,
                categoryName,
                checked
            });
    }

    async deleteItem(id: number) {
        await this.#db.shoppingItems.delete(id);
    }
}

const storage = new ShoppingItemStorage();
export { storage };