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
      setTimeout(() => setIsSpinning(false), 800);
      const result = getRandomInt(sides);
      addResult(sides, result);
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
      disabled={rolling || isSpinning}
      
   />
      {/* <motion.button
      className={`btn me-2 mb-2}`}
      onClick={handleClick}
      disabled={rolling || isSpinning}
      whileTap={{ scale: 0.9 }}
   >
      {rolling || isSpinning ? 'Rolling' : `D${sides}`}
   </motion.button> */}

   </div>
   )
}