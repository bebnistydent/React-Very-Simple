import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useRef } from "react";


export const UncontroledInput = () => <input />
export const Controledinput = () => <input value = {"IT-Incubator.hi"}/>

export const TrackedImput = () => {
    const [value, setValue] = useState('')

    return <><input onChange = {(event)=>{

       const actualValue = event.currentTarget.value 
       setValue(actualValue)

    }}/> value: {value}</>

};


export const GetImputById = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    const save = ()=> {
        const element = inputRef.current as HTMLInputElement;
        setValue(element.value)}

    return <><input ref = {inputRef} id = {"inputId"}/> <button onClick={save}>Save</button> value: {value}</>

};



export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)} 

    return <input value = {parentValue} onChange = {onChange} />


};



export const ControlledChecBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)} 

    return <input type = "checkbox" checked = {parentValue} onChange = {onChange} />


};

export const ControlledSelect = () => {

};