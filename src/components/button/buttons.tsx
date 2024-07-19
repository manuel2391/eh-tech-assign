import { useState } from "react";


type ButtonProp = {
    text:string;
    onClick : () => void;
}

type RadioButtonProps = {
    texts:string[];
    onClick:(text: string)=> void
}

type UnitButtonProps = {
    active:boolean
    text:string;
    position : "initial" | "last";
    onClick : ()=> void
}

export const SecondaryButton = (props: ButtonProp)=> {
    return(
        <>
            <div className="w-full border border-primary rounded-3xl p-3" onClick={props.onClick}>
                <p className="text-center text-xs">{props.text.toUpperCase()}</p>
            </div>
        </>
    )
}

export const PrimaryButton = (props: ButtonProp)=> {
    return(
        <>
            <div className="w-full border bg-primary rounded-3xl p-3" onClick={props.onClick}>
                <p className="text-center text-xs">{props.text.toUpperCase()}</p>
            </div>
        </>
    )
}

export const RadioButton = (props:RadioButtonProps) => {

    const [buttonActive,setButtonActive] = useState<string>(props.texts[0])

    const onClick = (item:string) => {
        setButtonActive(item);
        props.onClick(item);
    }

    const UnitButton = (props:UnitButtonProps) => {
        return(
            <>
                <div className={"w-auto " + (props.position == 'initial' ? "rounded-l-lg" : "rounded-r-lg") + " border-primary border px-2 py-1 " + (props.active ? "bg-primary" : "bg-white") } onClick={props.onClick}>
                    <p className=" text-app-foreground text-sm text-nowrap">{props.text}</p>
                </div>
            </>
        )
    }


    return(
        <>
            <div className="w-full flex">
                {props.texts.map((item,index)=>  <UnitButton key={index} active={ item == buttonActive } text={item} position={index == 0 ? "initial": "last" } onClick={()=>{onClick(item)}}/>  )}    
            </div>    
        
        </>
    )
}