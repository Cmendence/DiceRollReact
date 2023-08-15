import React from 'react'


export default function ClearResults({clearResults}) {
const [isCleared, setisCleared] = React.useState(false)

function handleClear() {
   clearResults();
   setisCleared(true);
   setTimeout(()=> setisCleared(false), 800);
}

   return(
   <button className={`btn ${isCleared? 'btn-success' : 'clear'} mb-2 mt-1`} onClick={()=> handleClear()}>
      {isCleared ? 'Cleared!' : 'Clear Results'}
   </button>
   )
}