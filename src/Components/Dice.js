import React from 'react'

export default function Dice(props) {
   
   const {getRandomInt, addResult} = props

function handleClick(sides) {
   const result = getRandomInt(sides);
   addResult(sides, result);
}

   return (
      <div>
         <div>
            
         </div>

         <button className='btn btn-primary me-2 mb-2' onClick={()=> handleClick(100)}>Percentile</button>
         <button className='btn btn-primary me-2 mb-2' onClick={()=> handleClick(20)}>D20</button>
         <button className='btn btn-primary me-2 mb-2' onClick={()=> handleClick(12)}>D12</button>
         <button className='btn btn-primary me-2 mb-2' onClick={()=> handleClick(10)}>D10</button>
         <button className='btn btn-primary me-2 mb-2' onClick={()=> handleClick(8)}>D8</button>
         <button className='btn btn-primary me-2 mb-2' onClick={()=> handleClick(6)}>D6</button>
         <button className='btn btn-primary me-2 mb-2' onClick={()=> handleClick(4)}>D4</button>

      
      </div>
   )
}