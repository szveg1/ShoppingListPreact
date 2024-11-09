import "./IconButton.less"
export type IconButtonProps = {
    iconName?: string;
    buttonContent?: string;
    onClick?: () => void;
}
export function IconButton({ iconName, buttonContent, onClick, ...iconButtonProps }:
    IconButtonProps) {
    return <div class="IconButton">
        <button type="button" onClick={onClick}>
            <span class="material-symbols-outlined">
                {iconName}
            </span>
            {buttonContent}
        </button>
    </div>
}