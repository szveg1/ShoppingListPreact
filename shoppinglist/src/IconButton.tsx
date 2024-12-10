import "./IconButton.less"
import { MaterialIcon, MaterialIconProps } from "./MaterialIcon";

/** Props for the `IconButton` component, which combines the `MaterialIcon` and a button. */
export type IconButtonProps = MaterialIconProps & {
    /** The text displayed on the button. */
    buttonContent?: string;
    /** Function to be called when the button is clicked. */
    onClick?: () => void;
}

/**
 * A component that renders a button with an optional icon and text.
 * 
 * @param props The props for the component.
 * @param props.buttonContent The text displayed on the button.
 * @param props.onClick Function to be called when the button is clicked.
 * @param props.iconName The name of the icon to display.
 * 
 * @returns A div element with a button that can display an icon and text.
 */
export function IconButton({ buttonContent, onClick, iconName }: IconButtonProps) {
    return <div class="IconButton">
        <button type="button" onClick={onClick}>
            <MaterialIcon iconName={iconName}></MaterialIcon>
            {buttonContent}
        </button>
    </div>
}