import React from 'react'


export default function RollResult(props){
   const number = props.results.length > 0 ? props.results[props.results.length - 1].result : '';

   return(
      <div>
         <h3 className='display-6'>Last Roll:</h3>
         {props.results.length > 0 ? (
           <span className = 'display-1'>{props.rolling ? "..." : number}</span>
         ) : (
           <span className = 'display-1'>&nbsp;</span>
         )}
      </div>
   )
}

