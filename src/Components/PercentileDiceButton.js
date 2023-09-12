import React from 'react'


export default function PercentileDiceButton(

   {
      sides, 
      getRandomInt, 
      addResult, 
      rolling,
      startRolling,
      stopRolling,
      diceImage,
      direction,
      isSpinning,
      setIsSpinning
     
      }) {


   

   const handleClick = () => {
      setIsSpinning(true);
      startRolling()
      setTimeout(() => {
          setIsSpinning(false)
          const result = getRandomInt(sides);
          addResult(sides, `${result}%`);
          stopRolling()
         }, 900);
   };

   return (
      <div>
        <img
          src={diceImage}
          alt="Spinning Dice"
          className={`spinning-percentile ${isSpinning ? `spin-${direction}` : ''}`}
          onClick={handleClick}
          style={{ pointerEvents: rolling || isSpinning ? 'none' : 'auto' }}
          
        />
      </div>
    );
}