import { FC } from "react";
import { Color } from "../types/enum";

interface IButton{
    color : Color
    onClick : ()=>void
    className : string
}

const Button : FC<IButton> = (props)=>{

    const {color,className,onClick} = props;

    return(
        <button 
            className={`btn btn-${color} ${className}`} 
            onClick={onClick}
        />
    )
}
export default Button