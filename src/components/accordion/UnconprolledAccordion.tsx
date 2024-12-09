import React, { useState } from "react"

type accordionPropsType = {
  title: string
  
}

export function UncontrolldAccordion (props: accordionPropsType) {

  let [collapsed, setCollapsed] = useState(false);
 
  const click = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  }
  
  


     return (
      <> 
        ---{props.title}---
    <Accordiontitle title={"Menu"} onClick ={ () => {setCollapsed(!collapsed)}}/>
    {collapsed && <Accordionbody />}
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