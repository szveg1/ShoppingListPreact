import { useState } from "preact/hooks"
import "./DarkThemeControl.less"
import { IconButton } from "./IconButton"
export function DarkThemeControl() {
    let [theme, setTheme] = useState(localStorage["theme"] || "dark_mode")
    return <div class="DarkThemeControl">
        <IconButton iconName={theme}
            onClick={() => (
                document.documentElement.classList.toggle("theme-light"),
                localStorage["theme"] = localStorage["theme"] ? "" : "theme-light",
                setTheme(localStorage["theme"] == "" ? "light_mode" : "dark_mode")
            )
            } />
    </div>
}