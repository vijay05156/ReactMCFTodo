import { FC } from "react";
import Box from "../components/Box";



const Todo : FC = ()=>{

    return(
        <div>
            <Box 
                child={<h2>Hello vijey</h2>} 
                height="500px" 
                width="500px"
                className="customBox"
            />
        </div>
    )
}
export default Todo;