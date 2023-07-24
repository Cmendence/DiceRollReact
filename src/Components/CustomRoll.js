import React from "react";

export default function CustomRoll(props) {
const {getRandomInt, addResult} =props
const [customSides, setCustomSides] = React.useState('')


function handleClick(sides) {
   const result = getRandomInt(sides);
   addResult(sides, result);
   setCustomSides('')

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
         placeholder="Custom"
         name="custom"
         value={customSides}
         onChange={handleChange}
         />
         </div>
         <button className="btn btn-warning mt-2 custom" onClick={()=> handleClick(customSides)}>Roll Custom</button>
      </div>
   )
}