import React from "react";



export default function CustomRoll(
   {
   getRandomInt,
   addResult, 
   rolling,
   startRolling, 
   stopRolling
}) 
{

const [customSides, setCustomSides] = React.useState('');
const [errorMessage, setErrorMessage] = React.useState('');
const [isRolling, setIsRolling] = React.useState(false);



function handleClick(sides) {

   if(!sides ||  parseInt(sides) === 0){
      setErrorMessage('Please enter a valid number');
      return
   }
   startRolling()
   setErrorMessage('')
   setIsRolling(true);
   setTimeout(() => {
      setIsRolling(false)
      const result = getRandomInt(sides);
      addResult(sides, result);
      stopRolling()
   }, 900);
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

<button
          onClick={() => handleClick(customSides)}
          className='ms-2 custom'
          disabled={rolling || isRolling}
        >
          {isRolling ? 'Rolling...' : 'Roll Custom' } 
        </button>

         </div>
         <div>  
            {errorMessage ? ( 
            <small className="text-danger">{errorMessage}</small>
            )
            :
            (<small className="text-danger">&nbsp;</small>)
            
            }
         </div>
      
      </div>
   )
}