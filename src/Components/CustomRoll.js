import React from "react";

export default function CustomRoll(props) {
const {getRandomInt, addResult} = props;
const [customSides, setCustomSides] = React.useState('');
const [errorMessage, setErrorMessage] = React.useState('');
const [isCleared, setisCleared] = React.useState(false)

function clearCustom() {
   setCustomSides('');
   setErrorMessage('');
   setisCleared(true);
   setTimeout(()=> setisCleared(false), 1000);
}


function handleClick(sides) {

   if(!sides ||  parseInt(sides) === 0){
      setErrorMessage('Please enter a valid number');
      return
   }
   const result = getRandomInt(sides);
   addResult(sides, result);
   
   setErrorMessage('')
}

function handleChange(e){
   const input = e.target.value
   setCustomSides(input)
}

   return (
      <div>
         <div>
         <input
         type="number"
         placeholder="Enter a number > 0"
         name="custom"
         value={customSides}
         onChange={handleChange}
         />
         {/* <button className="btn ms-2  clear" onClick={()=> clearCustom()}>Clear</button> */}

         <button className={`btn ${isCleared? 'btn-success' : 'clear'} mb-2 ms-2 mt-1`} onClick={()=> clearCustom()}>
      {isCleared ? 'Cleared!' : 'Clear'}
   </button>

         </div>
         <div>  
            {errorMessage && ( 
            <small className="text-danger">{errorMessage}</small>
            )}
         </div>
      
         <button className="btn mt-2 custom" onClick={()=> handleClick(customSides)}>Roll Custom</button>
      </div>
   )
}