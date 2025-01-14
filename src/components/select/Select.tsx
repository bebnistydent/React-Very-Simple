import React, { useState } from "react";
import styles  from "./Select.module.css"
import { KeyboardEvent } from "react";

type itemType = {
    title: string
    value: any
};

type selectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]
};



export function Select(props:selectPropsType ) {

    const [active, setActive] = useState(false);
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value);



   const selectedItem = props.items.find(i => i.value === props.value);
   const hoveredItem = props.items.find(i => i.value === hoveredItemValue);





   const toggleItems = () => setActive(!active);
   const onClickItem = (value: any) => {
                props.onChange(value); 
                toggleItems() 
   }
   

   const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if(e.key === "ArrowDown" || e.key === "ArrowUp") {
        for(let i = 0; i <props.items.length; i++) {
            if(props.items[i].value === hoveredItemValue) {
                const elementPretendent = e.key === "ArrowDown"
                ? props.items[i + 1] 
                : props.items[i - 1];

                if (props.items[i + 1]) {
                    props.onChange(props.items[i + 1].value)
                    break;
                }
            }
        }
    }

    if(e.key === "Enter" || e.key === "Escape") {
        setActive(false)
    }
   }



    return (

        <>

            <select>
                <option value="">Minsk</option>
                <option value="">Warsaw</option>
                <option value="">Kiev</option>
            </select>

                <div className={styles.select} tabIndex={0}>

            <span className={styles.main} onClick = {toggleItems}>{selectedItem && selectedItem.title}</span>

            { 
            active &&
            <div className={styles.items}>
                
            {props.items.map(i => <div 
            onMouseEnter={() => {setHoveredItemValue(i.value)}}
            className={styles.item + "" + (hoveredItem === i ? styles.selected : "")}
            key = {i.value}
            onClick={()=> {onClickItem(i.value)}}>
                {i.title}
            </div>)}

            </div>
            }
        </div>

        </>
    )
}