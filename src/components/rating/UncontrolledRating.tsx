import React, { useState } from "react";

type ratingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5,
  };

export function UncontrolledRating (props: ratingPropsType) {
    
    let [value, setValue] = useState(5);
    
    return  <div>
                <Star  selected = {value > 0} setValue = {() => {setValue(1)}} />
                <Star  selected = {value > 1} setValue = {() => {setValue(2)}} />
                <Star  selected = {value > 2} setValue = {() => {setValue(3)}} />
                <Star  selected = {value > 3} setValue = {() => {setValue(4)}} />
                <Star  selected = {value > 4} setValue = {() => {setValue(5)}} />
                
            </div>
   
    
  };

  
  
  

  type starPropsType = {
      selected: boolean
      setValue: () => void
  };
  
  export function Star (props: starPropsType) {

    return  <span onClick={()=> {props.setValue()}}>{props.selected ? <b>-Star-</b> : "-star-"}</span>
           
    };
