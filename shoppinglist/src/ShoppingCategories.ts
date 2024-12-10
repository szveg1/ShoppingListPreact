/**
 * Represents a category of shopping items.
 * 
 * A category includes a name and an associated icon to visually represent it.
 * 
 * @property name - The name of the category (e.g., "Fruits", "Electronics").
 * @property iconName - The name of the icon representing the category. 
 * This should correspond to a {@link https://fonts.google.com/icons | Material icon} name.
 */
export type ShoppingItemCategory = { name: string, iconName: string };

/** A list of the defined shopping categories */
export const shoppingCategories: ShoppingItemCategory[] = [
    { name: "Grocery", iconName: "grocery" },
    { name: "Pets", iconName: "pets" },
    { name: "Household Essentials", iconName: "cleaning" },
    { name: "Health", iconName: "medication_liquid" },
    { name: "Beauty & Personal care", iconName: "health_and_beauty" },
    { name: "Entertainment", iconName: "videogame_asset" },
    { name: "Sports, Fitness & Outdoors", iconName: "sports_gymnastics" },
    { name: "Toys", iconName: "toys_and_games" },
    { name: "School & Office", iconName: "ink_highlighter" },
    { name: "Electronics", iconName: "computer" },
    { name: "Baby", iconName: "child_care" },
    { name: "Home & Patio", iconName: "home_and_garden" }
]
