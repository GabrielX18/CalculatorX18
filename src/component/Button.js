import React from "react";
import "../styles/Button.css"

function Button({children,event,eventKey}){

	const isOperator=(data)=>{
		if(isNaN(data)&& data!= "."){
			return true
		}else{return false}
	}


    return(
            <button id="Button" className={isOperator(children)? "button_operator":"button_number"} onClick={()=>event(children)} /* onKeyDown={()=>eventKey(children)} */ >{children}</button> 		
    )
};

export default Button;