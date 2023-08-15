import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SpinningDice() {
   const [isSpinning, setIsSpinning] = useState(false);

   const handleClick = () => {
      setIsSpinning(true);
      setTimeout(() => setIsSpinning(false), 800);
   };

   return (
      <div>
         <motion.button
            className="spin-button"
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
         >
            Spin Image
         </motion.button>

         <motion.img
            src="https://freesvg.org/img/d20-blank.png"
            alt="Spinning D20"
            className={`spinning-image ${isSpinning ? 'spin' : ''}`}
            animate={{ rotate: isSpinning ? 0 : 720 }}
            transition={{ duration: 1 }}
         />
      </div>
   );
}
