
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
   console.log(results)
   
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


  return (
    <div className="App">
    <Header />
    <RollResult results = {results} />
    <ClearResults clearResults={clearResults}/>
    <Dice 
      getRandomInt={getRandomInt}
      addResult={addResult} 
     />
     <CustomRoll 
      getRandomInt={getRandomInt}
      addResult={addResult}
      />
    <DiceTable results={results}/>
    </div>
  );
}

export default App;
