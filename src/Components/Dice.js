import React from 'react'
import DiceButton from './DiceButton';
// import fourPINK from '../images/pink/4pinkBLANK.svg'
// import sixPINK from '../images/pink/6pinkBLANK.svg'
// import eightPINK from '../images/pink/8pinkBLANK.svg'
// import tenPINK from '../images/pink/10pinkBLANK.svg'
// import twelvePINK from '../images/pink/12pinkBLANK.svg'
// import twentyPINK from '../images/pink/20pinkBLANK.svg'
import percentile from '../images/Placeholder100.svg'
import four from '../images/NumberedDice/4num.svg'
import six from '../images/NumberedDice/6num.svg'
import eight from '../images/NumberedDice/8num.svg'
import ten from '../images/NumberedDice/10num.svg'
import twelve from '../images/NumberedDice/12num.svg'
import twenty from '../images/NumberedDice/20num.svg'


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
          <div className="row g-2 mb-4">
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