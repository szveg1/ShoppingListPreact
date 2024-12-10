import { useState } from "preact/hooks"
import "./ItemSearch.less"
import { storage } from "./ShoppingItemStorage";
import { IconButton } from "./IconButton";
import { ShoppingItem } from "./ShoppingItem";

export type ItemSearchProps = {
    onEditItem: (item: ShoppingItem) => void
}

export function ItemSearch({ onEditItem }: ItemSearchProps) {
    let [query, setQuery] = useState("");

    let results = storage.getAllStartingWith(query);
    console.log(results)

    return <div class="ItemSearch">
        <input type="search" placeholder="Search" value={query} onChange={e => setQuery(e.currentTarget.value)} />
        {results && <div class="results">
            {results.map(result => (
                <div class="result">
                    <p>{result.name}</p>
                    <IconButton iconName="edit" onClick={() => { onEditItem(result); setQuery("") }} />
                </div>
            ))}
        </div>}
    </div>
}