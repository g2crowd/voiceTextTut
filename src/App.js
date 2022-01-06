import React, {useEffect, useState} from 'react'
import './App.css'
import {useSpeechApi} from "./useSpeechApi";
import Select from "react-select";
import {languages} from "./languages";


function App() {
  const [savedNotes, setSavedNotes] = useState([])
  const [note, setNote, isListening, setIsListening, setDialect] = useSpeechApi('en-US')

  const [language, setLanguage] = useState(6)
  const [dialects, setDialects] = useState([])
  const [dialectsVisible, setDialectsVisible] = useState(true)

  useEffect(()=>{
    const list = languages[language];
    const options =  list.map((option,index) => new Option(option[1], option[0]))
    setDialects(options)
  },[language]);

  useEffect(()=>{
    setDialectsVisible(dialects.length>0 && dialects[1].length>1)
  }, [dialects])

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }

  const getLanguages = ()=> {
    return languages.map((option,index)=> new Option(option[0], index))
  }


  return (
    <>
      <h1>Voice Notes</h1>
      <div className="container">
        <div className="box">
          <h2>Current Note</h2>
          <Select options={getLanguages()} onChange={(option)=>setLanguage(option.value)}
                  className='react-select-container' classNamePrefix="react-select" />
          <Select options={dialects} isHidden={!dialectsVisible} onChange={(option)=> setDialect(option.value)}
                  className='react-select-container' classNamePrefix="react-select" />
          {isListening
              ? <span role="img" aria-label="recording">🎙️</span>
              : <span role="img" aria-label="record">🛑🎙️</span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
