import { useState } from "preact/hooks"
import { IconButton } from "./IconButton"

/**
 * A component that provides a control for toggling between dark and light themes.
 * 
 * This component uses an {@link IconButton} to switch themes. When the button is clicked, it toggles
 * the `theme-light` class on the document's root element and updates the `theme` state and 
 * localStorage to reflect the current theme.
 * 
 * @returns A div element with a button to toggle between dark and light themes.
 */
export function DarkThemeControl() {
    let [theme, setTheme] = useState("dark_mode");

    return <div class="DarkThemeControl">
        <IconButton
            iconName={theme}
            onClick={() => {
                document.documentElement.classList.toggle("theme-light");
                localStorage["theme"] = localStorage["theme"] ? "" : "theme-light";
                setTheme(localStorage["theme"] == "" ? "light_mode" : "dark_mode");
            }} />
    </div>
}