import React,{useState} from 'react';

export const ListNames = () => {

  const people = [{name: 'Juan',age:32},{name: 'Pedro',age:25},{name: 'Maria',age:18},{name: 'Luis',age:45},{name: 'Jorge',age:20},{name: 'Carlos',age:30},];

  const [names, setNames] = useState([]);

  const handleNames = () => setNames(people);

  return (
    <div className='div-list-names'>
      <h1>ListNames</h1>
      <button onClick={handleNames}>Listar</button>
      <ul>
        {names.map((name,key) => <li key={key}>{name.name}</li>)}
      </ul>
    </div>
  )
}
