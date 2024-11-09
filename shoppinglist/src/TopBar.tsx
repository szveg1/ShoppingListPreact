import "./TopBar.less"
import { DarkThemeControl } from "./DarkThemeControl";

export function TopBar() {
    return <div class = "TopBar">
        <h1>Shopping List</h1>
        <DarkThemeControl></DarkThemeControl>
    </div>
}