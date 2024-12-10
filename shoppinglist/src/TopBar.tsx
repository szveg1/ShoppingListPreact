import "./TopBar.less"
import { DarkThemeControl } from "./DarkThemeControl";
import { ItemSearch } from "./ItemSearch";
import { ShoppingItem } from "./ShoppingItem";

export type TopBarProps = {
    onEditItem: (item: ShoppingItem) => void
}

export function TopBar({ onEditItem }: TopBarProps) {
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