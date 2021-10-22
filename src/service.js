const url = 'http://localhost:8000/cars';

const getCars =()=> {
   return  fetch(url).then (value => value.json());
}

export {getCars};