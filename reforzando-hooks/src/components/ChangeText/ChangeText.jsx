import React, { useState } from 'react'

export const ChangeText = () => {

  const [ text, setText ] = useState('');

  const handleChange = (e) => setText(e.target.value);

  return (
    <div className='div-text'>
      <h1>ChangeText</h1>
      <input type="text" onChange={handleChange} placeholder="Inserta el nuevo texto" />
      <p>{text}</p>
    </div>
  )
}
