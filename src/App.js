
import './App.css';
import Dice from './Components/Dice';
import Header from './Components/Header';
import DiceTable from './Components/DiceTable';
import React from 'react'
import ClearResults from './Components/ClearResults';
import CustomRoll from './Components/CustomRoll';
import RollResult from './Components/RollResult';




function App() {
   
   const [results, setResults] = React.useState([])
   const [rolling, setRolling] = React.useState(false);
   
   function getRandomInt(max) {
      let result = Math.floor(Math.random() * Math.floor(max)) + 1;
      return result
    }

function addResult(sides, result){
   const newResult = {
      time: new Date().toLocaleTimeString(),
      sides: sides,
      result: result
   };
   setResults(prevResults => [...prevResults, newResult]);
}

   function clearResults(){
      setResults([]);
   }

   function startRolling() {
      setRolling(true)
   }

   function stopRolling() {
      setRolling(false)
   }

console.log(results)

  return (
    <div className="App">
    <Header />
 
    <RollResult 
      results={results} 
      rolling={rolling}
   />
 
    <Dice
      rolling={rolling}
      getRandomInt={getRandomInt}
      addResult={addResult} 
      startRolling={startRolling}
      stopRolling={stopRolling}
   
     />
     <CustomRoll 
      rolling={rolling}
      getRandomInt={getRandomInt}
      addResult={addResult}
      startRolling={startRolling}
      stopRolling={stopRolling}
      />
    <ClearResults clearResults={clearResults}/>
    <DiceTable results={results}/>
    </div>
  );
}

export default App;
