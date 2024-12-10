import "./TopBar.less"
import { DarkThemeControl } from "./DarkThemeControl";
import { ItemSearch } from "./ItemSearch";
import { ShoppingItem } from "./ShoppingItem";

/** Props for the `TopBar` component. */
export type TopBarProps = {
    /** Function to be called when an item is edited. */
    onEditItem: (item: ShoppingItem) => void
}

/**
 * Renders the top bar of the application.
 * 
 * @param props The props for the component.
 * @param props.onEditItem Function to be called when an item is edited.
 * 
 * @returns A div element with the top bar. 
 */
export function TopBar({ onEditItem }: Readonly<TopBarProps>) {
    return <div class="TopBar">
        <div class="title">
            <h1>Shopping List</h1>
            <DarkThemeControl></DarkThemeControl>
        </div>
        <div class="search">
            <ItemSearch onEditItem={onEditItem}/>
        </div>
    </div>
}