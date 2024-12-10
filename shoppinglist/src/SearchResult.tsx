import "./SearchResult.less"
import { IconButton } from "./IconButton";
import { ShoppingItem } from "./ShoppingItem";

/** Props for the `SearchResult` component */
export type SearchResultProps = {
    /** The search result to display */
    result: ShoppingItem
    /** Function to be called when the edit button is clicked */
    onEditItem: () => void
}

/**
 *  Displays a search result with an edit button
 * @param props The properties for the SearchResult component
 * @param props.result The search result to display
 * @param props.onEditItem Function to be called when the edit button is clicked 
 * 
 * @returns A div element with the search result and an edit button 
 */
export function SearchResult({ result, onEditItem }: Readonly<SearchResultProps>) {
    return <div class="SearchResult">
        <p>{result.name}</p>
        <IconButton iconName="edit" onClick={onEditItem} />
    </div>
}