import React from "react";
export const Children =() =>{
    console.log(("Child render"));
    return <div>Child Component</div>
}
 export const MemmorizedChild= React.memo(Children)