import "./ShoppingCategory.less"
import { MaterialIcon } from "./MaterialIcon"
import { ShoppingItemCategory } from "./ShoppingCategories"

/** Props for the `ShoppingCategory` component, which represents a `ShoppingItemCategory` object. */
export type ShoppingCategoryProps = ShoppingItemCategory & {
    /** Function to be called when the category is clicked. */
    onClick?: (string) => void;
    /** Whether the category is chosen or not. */
    isChosen?: boolean;
}

/**
 * Renders a shopping category.
 * @param props The props for the component.
 * @param props.onClick Function to be called when the category is clicked.
 * @param props.isChosen Whether the category is chosen or not.
 * @param shoppingItemCategory.name The name of the category.
 * @param shoppingItemCategory.iconName The name of the icon to display. 
 * 
 * @returns A div element with a button that displays the category name and icon. 
 */
export function ShoppingCategory({ onClick, isChosen, ...shoppingItemCategory }: ShoppingCategoryProps) {
    return <div class={`ShoppingCategory ${isChosen ? 'chosen' : ''}`}>
        <button type="button" onClick={() => onClick(shoppingItemCategory.name)}>
            <MaterialIcon iconName={shoppingItemCategory.iconName} />
            {shoppingItemCategory.name}
        </button>
    </div>
}