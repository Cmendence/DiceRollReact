import React from 'react'


export default function ClearResults({clearResults}) {
const [isCleared, setisCleared] = React.useState(false)

function handleClear() {
   clearResults();
   setisCleared(true);
   setTimeout(()=> setisCleared(false), 1000);
}

   return(
   <button className={`btn ${isCleared? 'btn-success' : 'clear'} mb-2`} onClick={()=> handleClear()}>
      {isCleared ? 'Cleared!' : 'Clear Results'}
   </button>
   )
}