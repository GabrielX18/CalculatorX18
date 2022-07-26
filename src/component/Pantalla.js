import React from "react";
import "../styles/Mirrow.css"

function Pantalla({input, isMirrow,event}){
    return(
        <div className={isMirrow? "mirrow_content": "clearButton"} onClick={event}>
            {input}
        </div>
    );
}


export default Pantalla; 