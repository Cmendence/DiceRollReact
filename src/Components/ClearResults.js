import React from 'react'


export default function ClearResults({clearResults}) {
   return(
   <button className='btn btn-danger mb-2 clear' onClick={()=> clearResults()}>Clear Results</button>
   )
}