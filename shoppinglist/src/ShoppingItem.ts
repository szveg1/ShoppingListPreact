/**
 * Represents an item in a shopping list.
 */
export interface ShoppingItem {
    id?: number;
    name: string;
    categoryName: string;
    checked: boolean;
}