import {useState, useEffect} from 'react';
import {getCars} from "./service";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars().then(value => setCars([...value]))
  },[])
  return (
    <div>
      {cars.map(value => (<div  key={value.id}>
           <p> 'Brand:' {value.brend}</p>
            <p>'Model:' {value.model}</p>
           <p>'Color:' {value.color}</p>
            <p>'AutoPark:'{value.autoPark}</p>
      </div>
          ))}
    </div>
  );
}

export default App;
