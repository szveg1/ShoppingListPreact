export type MaterialIconProps = {
    iconName?: string;
}
export function MaterialIcon({ iconName }: MaterialIconProps) {
    return <span class="material-symbols-outlined">
        {iconName}
    </span>
}