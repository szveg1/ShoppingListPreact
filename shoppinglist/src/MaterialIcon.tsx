/**
 * Properties for the Material icon
 */
export type MaterialIconProps = {
    /** Name of the icon that gets displayed, for more info: {@link https://fonts.google.com/icons} */
    iconName?: string;
}

/**
 * Displays an icon from the Material design icon set
 * @param props The properties for the MaterialIcon component
 * @param props.iconName The name of the icon to display
 * 
 * @returns A span element with the specified icon
 */
export function MaterialIcon({ iconName }: Readonly<MaterialIconProps>) {
    return <span class="material-symbols-outlined">
        {iconName}
    </span>
}