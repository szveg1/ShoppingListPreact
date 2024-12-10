import "./CategoryChooser.less"
import { useEffect, useState } from "preact/hooks";
import { shoppingCategories } from "./ShoppingCategories";
import { ShoppingCategory } from "./ShoppingCategory";

/** Props for the `CategoryChooser` component. */
export type CategoryChooserProps = {
    /**
     * Function to be called when a category is clicked.
     * @param category 
     */
    onCategoryClick?: (category: string) => void;
    /**  The initial category that's highlighted. */
    selectedCategory?: string;
}

/**
 * Renders the category chooser, 
 * if a selectedCategory is passed, it will be highlighted.
 *
 * @param props The props for the component.
 * @param props.onCategoryClick Function to be called when a category is clicked.
 * @param props.selectedCategory The initial category that's highlighted.
 * 
 * @returns A div element with the category chooser.
 */
export function CategoryChooser({ onCategoryClick, selectedCategory }: Readonly<CategoryChooserProps>) {
    /** State to keep track of the chosen category. */
    let [chosenCategory, setChosenCategory] = useState(selectedCategory || "");


    /** Effect to update the chosen category, when the selectedCategory prop changes. */
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