import { useEffect, useState } from "preact/hooks";
import "./CategoryChooser.less"
import { shoppingCategories } from "./ShoppingCategories";
import { ShoppingCategory } from "./ShoppingCategory";

export type CategoryChooserProps = {
    onCategoryClick?: (string) => void;
    selectedCategory?: string;
}

export function CategoryChooser({ onCategoryClick, selectedCategory }: Readonly<CategoryChooserProps>) {
    let [chosenCategory, setChosenCategory] = useState(selectedCategory || "");

    useEffect(() => {
        setChosenCategory(selectedCategory || "");
    }, [selectedCategory]);

    return (
        <div className="CategoryChooser">
            {shoppingCategories.map(category => (
                <ShoppingCategory
                    name={category.name}
                    iconName={category.iconName}
                    isChosen={category.name == chosenCategory}
                    onClick={() => {
                        setChosenCategory(category.name);
                        onCategoryClick(category.name);
                    }} />
            ))}
        </div>
    );
}