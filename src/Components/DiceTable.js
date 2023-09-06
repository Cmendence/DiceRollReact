import Table from 'react-bootstrap/Table';

export default function DiceTable({results}) {

   //reversed results array so the most recent roll is at the top.
   const resultsDisplay = [...results].reverse(); 

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Time</th>
          <th>Sides</th>
          <th>Result</th>
        </tr>
      </thead>
        <tbody>
        {resultsDisplay.map(roll => {
         return(
          <tr key={roll.time}>
         <td>{roll.time}</td>
         <td>{roll.sides}</td>
         <td className='fw-bold'>{roll.result}</td>
         </tr> 
        )})}
      </tbody> 
  
    </Table>
  );
}
