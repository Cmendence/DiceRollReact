import React from 'react'
import { motion } from 'framer-motion';


export default function DiceButton(
   {
      sides, 
      getRandomInt, 
      addResult, 
      rolling,
      startRolling,
      stopRolling,
      diceImage,
     
      }) {


   const [isSpinning, setIsSpinning] = React.useState(false);

   const handleClick = () => {
      setIsSpinning(true);
      startRolling()
      setTimeout(() => {
          setIsSpinning(false)
          const result = getRandomInt(sides);
          addResult(sides, result);
          stopRolling()
         }, 900);
   };


   return(
      <div>
      <motion.img
      src={diceImage}
      alt="Spinning Dice"
      className={`spinning-image ${isSpinning ? 'spin' : ''}`}
      animate={{ rotate: isSpinning ? 0 : 720 }}
      transition={{ duration: 1 }}
      onClick={handleClick}
      style={{ pointerEvents: rolling || isSpinning ? 'none' : 'auto' }}
      
   />

   </div>
   )
}