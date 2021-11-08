import { useReducer } from "react";
function reducer(state, action){
    switch(action.type){
      case "increment": return state+1;
      case "decrement": return state-1;
    }
  }
  
  const Reducer = () => {
    const [count, dispatch] = useReducer(reducer, 0)
      return (
          <div>  
        <div> count:{count}</div>
          <button onClick={()=> dispatch({type:"increment"})}> Increment</button>
          <button onClick={()=> dispatch({type:"decrement"})}> Decrement</button>
          <h2>Reducer</h2>
          </div>
      )
  }
  
  export default Reducer
  
 
 