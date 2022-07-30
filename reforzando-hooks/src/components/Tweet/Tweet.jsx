import React,{useRef, useState, useEffect} from 'react';

export const Tweet = () => {

  const textTweet = useRef(null);
  const [tweet, setTweet] = useState([]);

  const handleTweet = (e) => {
    e.preventDefault();
    setTweet([...tweet, textTweet.current.value]);
    textTweet.current.value = '';
    textTweet.current.placeholder = 'Type your tweet here...';
  }
  
  useEffect(() => {    
    console.log(tweet);
  }, [tweet]);
  

  return (
    <div className="div-tweet">
      <h1>Tweet</h1>
      <hr />
      <textarea name="" ref={textTweet}cols="30" rows="10"></textarea>      
      {tweet.map( tw => <p>{tw}</p>)}      
      <button onClick={handleTweet}>Send Tweet</button>
      <button>Clear</button>
    </div>
  )
}
