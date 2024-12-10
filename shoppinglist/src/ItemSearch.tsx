import "./ItemSearch.less"
import { useState } from "preact/hooks"
import { storage } from "./ShoppingItemStorage";
import { ShoppingItem } from "./ShoppingItem";
import { SearchResult } from "./SearchResult";

/** Props for the `ItemSearch` component */
export type ItemSearchProps = {
    /**
     * Function to be called when an item is edited.
     * @param item - The item to be edited.
     */
    onEditItem: (item: ShoppingItem) => void
}

/**
 * A search component for finding and editing shopping items.
 * 
 * This component provides an input field for searching through shopping items 
 * and displays the matching results. Each result includes an edit button 
 * that allows triggering the `onEditItem` callback.
 * 
 * @param props - The props for the `ItemSearch` component.
 * @param props.onEditItem - Function to be called when an item is edited. 
 * Clears the search query after the callback is triggered.
 * 
 * @returns An element representing the search UI.
 */
export function ItemSearch({ onEditItem }: Readonly<ItemSearchProps>) {
    let [query, setQuery] = useState("");

    let results = storage.getAllStartingWith(query);

    return <div class="ItemSearch">
        <input type="search" placeholder="Search" value={query} onChange={e => setQuery(e.currentTarget.value)} />
        {results && <div class="results">
            {results.map(result => <SearchResult result={result} onEditItem={() => { onEditItem(result); setQuery("") }} />)}
        </div>}
    </div>
}