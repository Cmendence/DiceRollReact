import React from 'react'
import DiceButton from './DiceButton';
import four from '../images/pink4.svg'
import six from '../images/6pinkBLANK.svg'
import eight from '../images/8pinkBLANK.svg'
import ten from '../images/10pinkBLANK.svg'
import twelve from '../images/12pinkBLANK.svg'
import twenty from '../images/20pinkBLANK.svg'
import percentile from '../images/Placeholder100.svg'


export default function Dice(props) {
   
   const {
      getRandomInt,
      addResult,
      rolling,
      startRolling, 
      stopRolling,
   } = props

function handleClick(sides) {
   const result = getRandomInt(sides);
   addResult(sides, result);
}

   return (
      <div className='container'>
          <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col">
         <DiceButton 
            className='btn me-2 mb-2' 
            sides={100}
            rolling={rolling}
            startRolling={startRolling}
            stopRolling={stopRolling}
            getRandomInt={getRandomInt}
            addResult={addResult}
            onClick={()=> handleClick(100)} 
            diceImage={percentile}
            />
            </div>

         <div className='col'>
         <DiceButton 
            className='btn me-2 mb-2'
            sides={20}
            rolling={rolling}
            startRolling={startRolling}
            stopRolling={stopRolling}
            getRandomInt={getRandomInt}
            addResult={addResult}
            diceImage={twenty}
         />
         </div>

         <div className='col'>
         <DiceButton 
            className='btn me-2 mb-2' 
            sides={12}
            rolling={rolling}
            startRolling={startRolling}
            stopRolling={stopRolling}
            getRandomInt={getRandomInt}
            addResult={addResult}
            onClick={()=> handleClick()} 
            diceImage={twelve}
         />
         </div>

         <div className='col'>
         <DiceButton 
            className='btn me-2 mb-2' 
            sides={10}
            rolling={rolling}
            startRolling={startRolling}
            stopRolling={stopRolling}
            getRandomInt={getRandomInt}
            addResult={addResult}
            onClick={()=> handleClick()} 
            diceImage={ten}
         />
         </div>

         <div className='col'>
         <DiceButton 
            className='btn me-2 mb-2' 
            sides={8}
            rolling={rolling}
            startRolling={startRolling}
            stopRolling={stopRolling}
            getRandomInt={getRandomInt}
            addResult={addResult}
            onClick={()=> handleClick()}  
            diceImage={eight}
         />
         </div>
         

         <div className='col'>
         <DiceButton 
            className='btn me-2 mb-2' 
            sides={6}
            rolling={rolling}
            startRolling={startRolling}
            stopRolling={stopRolling}
            getRandomInt={getRandomInt}
            addResult={addResult}
            onClick={()=> handleClick()} 
            diceImage={six} 
         />    
         </div>

        <div className='col'>
         <DiceButton 
            className='btn me-2 mb-2'
            sides={4}
            rolling={rolling}
            startRolling={startRolling}
            stopRolling={stopRolling}
            getRandomInt={getRandomInt}
            addResult={addResult}
            onClick={()=> handleClick()} 
            diceImage={four}
         />
         </div>
      </div>
   </div>
      
   )
}