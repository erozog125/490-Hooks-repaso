import React,{useState,useEffect} from 'react';

export const ChangeStyle = ({class1,class2}) => {

  const [ styleTitle, setStyleTitle ] = useState(class1);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    counter >= 10 ? setStyleTitle(class2) : setStyleTitle(class1);
  },[counter])

  return (
    <div>
      <h1 className={styleTitle}>ChangeStyle</h1>
      <h2>{counter}</h2>
      <hr />
      <div className="buttons">
        <button onClick={()=>setCounter(counter-1)}>Restar</button>
        <button onClick={()=>setCounter(counter+1)}>Sumar</button>
      </div>
    </div>
  )
}
