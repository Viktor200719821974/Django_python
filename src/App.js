import {useState, useEffect} from 'react';

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('https://localhost:8080/cars').then((value => value.json())
        .then(value => setCars(value)))
  },[])
  return (
    <div>
      {cars.map(value => (<div  key={value.id}>
           <p> 'Brend:' {value.brend}</p>
            <p>'Model:' {value.model}</p>
           <p>'Color:' {value.color}</p>
            <p>'AutoParkId:'{value.autoParkId}</p>
      </div>
          ))}
    </div>
  );
}

export default App;
