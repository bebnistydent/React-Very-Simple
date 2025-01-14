import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating, RatingValueType } from './components/rating/Rating';
import OnOff from './components/onOff/OnOff';
import { UncontrolldAccordion } from './components/accordion/UnconprolledAccordion';
import { UncontrolledRating } from './components/rating/UncontrolledRating';
import UncotrolledOnOff from './components/onOff/UncontrolledOnOff';
import { Controledinput, ControlledChecBox, GetImputById, TrackedImput, UncontroledInput, ControlledInput } from './components/input/Input';
import { onClickItem } from './components/accordion/Accordion';
import { Select } from './components/select/Select';

function App() {
  let [ratinValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false);
  
  return (
    <div className="App">

      {/* <ControlledInput />
      <ControlledChecBox /> */}
     
      {/* <GetImputById /> */}

      {/* <UncotrolledOnOff onChange = {setSwitchOn}/> {switchOn.toString()} */}
      
     
      {/* <OnOff on = {switchOn} onChange={setSwitchOn} /> */}
      {/* <UncontrolldAccordion title = {"revolt!"}/>
      <UncontrolledRating />

      <Rating value={ratinValue} onClick = {setRatingValue}/>*/}
      {/* <Accordion title={'Accordion'}  collapsed = {accordionCollapsed} 
       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} 
       items = {[{title: 'me', value: 1}, {title: "you", value: 2}, ] } onClick = {onClickItem}/>  */}

{/* <Select value={2} onChange={handleChange} items={items}/> */}

    </div>
  );
}














export default App;


