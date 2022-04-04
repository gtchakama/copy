import { useState} from 'react'
import Emojis from "./clipboard"
import "./App.css"


const App = () => {
  const [text, setText] = useState('');

    const copy = async (emoji: any) => {
      await navigator.clipboard.writeText(emoji) ;
      setText(`added ${emoji} to clipboard`)
      
    }


  return <>
  <div className='main'>
    <div>
      
    <div className='emoji-container'>
      {Emojis.map(emoji => <span key={emoji} >
      <button className='emoji'  onClick={()=> copy(emoji) }>{emoji} </button> </span>)}
      </div>
      <button className='clear' onClick={()=> setText("")}>Clear</button>
  </div>
      <input />
  <h1> {"emoji" ? text: null}</h1>
  </div>
  </>
}

export default App


