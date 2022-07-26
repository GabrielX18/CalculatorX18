import logo from './logo.svg';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './styles/App.css';
import Button from './component/Button';
import Pantalla from './component/Pantalla';

function App() {

 const [state,setState]= useState("");

 const handlerState=(value)=>{
   return setState(state+value)
 }

 const resetState=()=>{setState("")}

 const getResult=()=>{
   if(state){
    return setState(evaluate(state))
   }else{
     return alert("Por favor intruduce un valor correcto")
   }
 }

document.addEventListener("keyup",e=>{
  if(!isNaN(e.key)){
    return setState(state+e.key)
  }else if(e.key==="+"||e.key==="-"||e.key==="*"||e.key==="/"){
    return setState(state+e.key)
  }else if(e.key==="Enter"&&state){
    return setState(evaluate(state))
  }else if(e.key==="Backspace"&&state){
    return resetState()
  }   
})
  



  return (
    <div className="App">
      <div className='calculator_content'>

        <Pantalla isMirrow={true} input={state} />
        
        <div className='button_content'>
          <div className='button_content-row 1'>
            <Button event={handlerState} >1</Button>
            <Button event={handlerState}>2</Button>
            <Button event={handlerState}>3</Button>
            <Button event={handlerState}>+</Button>
          </div>
          <div className='button_content-row 2'>
          <Button event={handlerState}>4</Button>
          <Button event={handlerState}>5</Button>
          <Button event={handlerState}>6</Button>
          <Button event={handlerState}>-</Button>
          </div>
          <div className='button_content-row 3'>
          <Button event={handlerState}>7</Button>
          <Button event={handlerState}>8</Button>
          <Button event={handlerState}>9</Button>
          <Button event={handlerState}>*</Button>
          </div>
          <div className='button_content-row 4'>
          <Button event={getResult}>=</Button>
          <Button event={handlerState}>0</Button>
          <Button event={handlerState}>.</Button>
          <Button event={handlerState}>/</Button>
          </div>
        </div>

        <Pantalla isMirrow={false} input={"Clear"} event={()=> resetState()} />

      </div>
    </div>
  );
}

export default App;
