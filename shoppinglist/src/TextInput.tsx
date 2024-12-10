import "./TextInput.less"
/** Props for the `TextInput` component. */
export type TextInputProps = {
    /** The value of the input field. */
    value: string;
    /** Function to be called when the value of the input field changes. */
    onChange: (value: string) => void;
    /** The type of the input field. */
    type?: "text" | "password" | "email";
    /** The placeholder text for the input field. */
    placeholder?: string;
    /** Function to be called when the Enter key is pressed. */
    onEnter?: () => void;
    /** Whether the input field should be autofocused. */
    autofocus?: boolean;
}

/**
 * Renders a text input field.
 * 
 * @param props The props for the component.
 * @param props.value The value of the input field.
 * @param props.onChange Function to be called when the value of the input field changes.
 * @param props.type The type of the input field.
 * @param props.placeholder The placeholder text for the input field.
 * @param props.onEnter Function to be called when the Enter key is pressed.
 * @param props.autofocus Whether the input field should be autofocused.
 * 
 * @returns A div element with the text input field.
 */
export function TextInput({ value, onChange, type, placeholder, onEnter, autofocus }:
    Readonly<TextInputProps>) {
    return <div class="TextInput">
        <input type={type} value={value} onInput={e => onChange(e.currentTarget.value)}
            autofocus={autofocus}
            onKeyDown={onEnter ? e => {
                if (e.key === "Enter")
                    onEnter!();
            } : undefined} />
        <label class={value ? "subsided" : undefined}>
            {placeholder}
        </label>

    </div>
}
