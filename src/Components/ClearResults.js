import React from 'react'


export default function ClearResults({clearResults}) {
const [isCleared, setisCleared] = React.useState(false)

function handleClear() {
   clearResults();
   setisCleared(true);
   setTimeout(()=> setisCleared(false), 800);
}

   return(
   <button className={`btn btn-sm text-light ${isCleared? 'btn-success' : 'clear'} mb-1`} onClick={()=> handleClear()}>
      {isCleared ? 'Cleared!' : 'Clear Results'}
   </button>
   )
}