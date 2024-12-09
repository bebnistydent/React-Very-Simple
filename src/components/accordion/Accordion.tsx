import React from "react"

type itemType = {
  title: string 
  value: any
}

type accordionPropsType = {
  title: string
  collapsed: boolean
  onChange: () => void
  items: itemType[]
  onClick: (value: any) => void
  

}

export const onClickItem = () => console.log("Cliked")

export function Accordion (props: accordionPropsType) {
    
     return (
      <> 
        ---{props.title}---
    <Accordiontitle title="Menu" onChange={props.onChange} />
    {!props.collapsed && <Accordionbody items = {props.items} onClick = {props.onClick}/>}
    
      </>
      );
   
 
  };


  type accordionTitlePropsType = {
    title: string
    onChange: () => void
    
    
    
  }

  export function Accordiontitle (props: accordionTitlePropsType) {
        return (
            <h3 onClick={props.onChange} >{props.title}</h3>
        )
  };

export type accordionBodyPropsType = {
  items: itemType[]
  onClick: (value: any) => void
}

  export function Accordionbody (props: accordionBodyPropsType) {
    return (
        <ul>
          {props.items.map( (i, index) => <li onClick = {() => {props.onClick(i.value)}} 
           key = {index}>{i.title}</li>)}
              
        </ul>
    )
  };