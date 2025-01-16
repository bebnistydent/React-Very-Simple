import React, { useReducer, useState } from "react";
import { reducer, COLLAPSED } from "./Reducer";

type accordionPropsType = {
  title: string
  
}

// type actionType = {
//   type: string

// }

// const COLLAPSED_1 = "Switch-Collapsed"
// const reducer = (state: boolean, action: actionType) => {
  
//     console.log("Reducer start")
//     console.log(state)
//     console.log(action)
//     console.log("Reducer and")

//     switch (action.type) {
//         case COLLAPSED:
//           return !state;
//         default:
//           return state;
          
//     }


// }



export function UncontrolldAccordion (props: accordionPropsType) {

  //let [collapsed, setCollapsed] = useState(false);

  let [state, dispatch] = useReducer(reducer, {collapsed: false});
 
  

     return (
      <> 
       
    {/* <Accordiontitle title={props.title} onClick ={ () => {setCollapsed(!collapsed)}}/> */}
    <Accordiontitle title={props.title} onClick ={ () => {
      dispatch({type: COLLAPSED})}}/>
    {!state.collapsed && <Accordionbody />}
      </>
      );
   
 
  };


  type accordionTitlePropsType = {
    title: string
    onClick: () => void
  }

  export function Accordiontitle (props: accordionTitlePropsType) {
        return (
            <h3 onClick={props.onClick}>{props.title}</h3>
        )
  };



  export function Accordionbody () {
    return (
        <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
        </ul>
    )
  };