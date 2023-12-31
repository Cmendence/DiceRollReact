import React from 'react'


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

   return (
      <div>
        <img
          src={diceImage}
          alt="Spinning Dice"
          className={`spinning-image ${isSpinning ? 'spin' : ''}`}
          onClick={handleClick}
          style={{ pointerEvents: rolling || isSpinning ? 'none' : 'auto' }}
        />
      </div>
    );
}