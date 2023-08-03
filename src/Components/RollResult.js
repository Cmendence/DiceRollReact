import React from 'react'


export default function RollResult(props){
   const number = props.results.length > 0 ? props.results[props.results.length - 1].result : '';

   return(
      <div>
         <span className='display-6'>Your Roll:</span>
         {props.results.length > 0 ? (
           <h1 className = 'display-1'>{number}</h1>
         ) : (
           <h1 className = 'display-1'>&nbsp;</h1>
         )}
      </div>
   )
}

