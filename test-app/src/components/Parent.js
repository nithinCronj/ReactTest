import React,{useState} from "react"
import {MemmorizedChild} from './Children'
export const Parent = () => {
    const [name, setName]=useState('Cronj')
    const [count, setCount]=useState(0)
    console.log("Parent rendering");
    return (
        <div>
            <button onClick={()=> setCount((c)=> c+1)} > Count-{count}</button>
            <button onClick={()=> setName(("SDE"))}> Name CHange</button>
            <MemmorizedChild name={name}/>
        </div>
    )
}

