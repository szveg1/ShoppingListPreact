import { useState } from "preact/hooks";
import { IconButton } from "./IconButton"
import "./ModalWindow.less"
import { TextInput } from "./TextInput";

export type ModalWindowProps = {
    windowTitle?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export function ModalWindow({ windowTitle, isOpen, onClose} : Readonly<ModalWindowProps>) {
    if (!isOpen) return null

    let[name, setName] = useState("")
    let[category, setCategory] = useState("")

    return <div class="NewItemModal">
        <div class="top">
            <h2>{windowTitle}</h2>
            <IconButton iconName="close" onClick={() => {onClose(); setName(""); setCategory("")}}/>
        </div>
        <div class="content">
            <TextInput placeholder="Item name" value={name} onChange={setName}/>
            <TextInput placeholder="Category" value={category} onChange={setCategory}/>
        </div>
        <div class="bottom">
            {/*TODO add logic for adding the item to the list*/} 
            <IconButton iconName="check"/>
        </div>
    </div>
}