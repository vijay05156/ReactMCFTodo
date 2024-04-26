import { FC, ReactNode } from "react"

interface IBox{
    height : string
    width : string
    child : ReactNode
    className? : string
}

const Box : FC<IBox> = (props)=>{

    const {height,width, child ,className} = props;

    return(
        <div className={className || ''} style={{width :width,height : height}}>
            {child}
        </div>
    )
}
export default Box