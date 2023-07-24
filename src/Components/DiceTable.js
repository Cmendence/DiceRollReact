import Table from 'react-bootstrap/Table';

export default function DiceTable(props) {
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
        {props.results.map(roll => {
         return(
          <tr key={roll.time}>
         <td>{roll.time}</td>
         <td>{roll.sides}</td>
         <td>{roll.result}</td>
         </tr> 
        )})}
      </tbody> 
  
    </Table>
  );
}
