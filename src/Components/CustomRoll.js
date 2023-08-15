import React from "react";
import { motion } from 'framer-motion';


export default function CustomRoll(props) {
const {getRandomInt,
       addResult, 
       rolling,
       startRolling, 
       stopRolling} = props;
const [customSides, setCustomSides] = React.useState('');
const [errorMessage, setErrorMessage] = React.useState('');
const [isSpinning, setIsSpinning] = React.useState(false);


function handleClick(sides) {

   if(!sides ||  parseInt(sides) === 0){
      setErrorMessage('Please enter a valid number');
      return
   }
   const result = getRandomInt(sides);
   addResult(sides, result);
   
   setErrorMessage('')
   setIsSpinning(true);
   setTimeout(() => setIsSpinning(false), 800);
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
            <motion.button 
               
               onClick={()=> handleClick(customSides)}
               className={` ${isSpinning ? 'spin' : ''}btn ms-2  custom`}
               animate={{ rotate: isSpinning ? 540 : 0 }}
               transition={{ duration: 1 }}
               disabled={rolling || isSpinning}
            >
               {rolling ? 'Rolling' : 'Roll Custom'}
            </motion.button>
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