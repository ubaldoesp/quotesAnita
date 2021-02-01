import './App.css';
import React, { useState, useEffect } from 'react';
import quotes from './quotes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
 


const QuotesApp=({colorRandom, buttonColor})=> {
 const [isQuotes, setIsQuotes] = useState("")
 const[isAuthor, setIsAuthor] = useState("")


    useEffect(() => {
      getQuotes();
    }, [])

  const getQuotes = () => {
    let quotesData = quotes.quotes
    let random = Math.floor(Math.random() * quotesData.length)
    console.log(random)
    let randomQuote = quotesData[random]
    console.log(randomQuote)
    setIsQuotes(randomQuote.quote)
    setIsAuthor(randomQuote.author)
    
  }

  const handleQUotes = () => {
    getQuotes()
  }

  return (

 
    <div className="body changecolor" >
     <div className= "card">
       <div className= "quote">
         <p>{isQuotes}</p>
         <p className="author">-{isAuthor}-</p>
         </div>       
       <div className="buttons">
         <a href={`https://twitter.com/intent/tweet?text=${isQuotes}${isAuthor}`} target="_blank" className="nextquote"   style={{backgroundColor: buttonColor }}  ><FontAwesomeIcon icon={faTwitter}  /></a>
                  
          <button onClick={()=> {
            handleQUotes()
            colorRandom()
            
          }}  className="nextquote " style={{backgroundColor: buttonColor }} >Next Quote </button>
       </div>      
     </div>
     
    </div>
  );

}


function App() {
  const [isChangeColor, setIsChangeColor]= useState("#f3da75") 
  const handleChangeColor =()=> {
    const randomColor = "#"+ Math.floor(Math.random() * 16777215).toString(16)
     setIsChangeColor(randomColor)
  }
  return (
    <div style={{backgroundColor: isChangeColor }}>
      <QuotesApp colorRandom={handleChangeColor} buttonColor={isChangeColor}/>
    </div>
  )
}

export default App;
