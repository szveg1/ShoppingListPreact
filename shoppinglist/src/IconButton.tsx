import "./IconButton.less"
import { MaterialIcon, MaterialIconProps } from "./MaterialIcon";

/**
 * Props for the IconButton component.
 * Extends the MaterialIconProps with additional properties.
 * 
 * @typedef {Object} IconButtonProps
 * @property {string} [buttonContent] - Optional content to be displayed inside the button.
 * @property {() => void} [onClick] - Optional click event handler for the button.
 */
export type IconButtonProps = MaterialIconProps & {
    buttonContent?: string;
    onClick?: () => void;
}

/**
 * IconButton component that renders a button with an optional MaterialIcon and content.
 * 
 * @param {IconButtonProps} props - The properties for the IconButton component.
 * @returns {JSX.Element} The rendered IconButton component.
 */
export function IconButton({ buttonContent, onClick, ...materialIconProps }: IconButtonProps) {
    return <div class="IconButton">
        <button type="button" onClick={onClick}>
            <MaterialIcon {...materialIconProps}></MaterialIcon>
            {buttonContent}
        </button>
    </div>
}