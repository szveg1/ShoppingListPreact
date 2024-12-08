import { MaterialIcon } from "./MaterialIcon"
import { ShoppingItemCategory } from "./ShoppingCategories"
import "./ShoppingCategory.less"

export type ShoppingCategoryProps = ShoppingItemCategory & {
    onClick?: (string) => void;
    isChosen?: boolean;
}

export function ShoppingCategory({ onClick, isChosen, ...shoppingItemCategory }: ShoppingCategoryProps) {
    return <div class={`ShoppingCategory ${isChosen ? 'chosen' : ''}`}>
        <button type="button" onClick={() => onClick(shoppingItemCategory.name)}>
            <MaterialIcon iconName={shoppingItemCategory.iconName} />
            {shoppingItemCategory.name}
        </button>
    </div>
}