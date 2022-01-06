import React, {useEffect, useState} from 'react'
import './App.css'
import {useSpeechApi} from "./useSpeechApi";
import Select from "react-select";
import {languages} from "./languages";
import {useLanguage} from "./useLanguage";
import {Status} from "./Status";

import Mic from './images/mic.gif'
import RecordingMic from './images/mic-animate.gif'

function App() {
    const [savedNotes, setSavedNotes] = useState([])
    const [note, setNote, isListening, setIsListening, dialect, setDialect, status] = useSpeechApi('en-US')

    const englishIndex = 6
    const [dialects, setLanguage] = useLanguage(englishIndex)
    const [dialectsVisible, setDialectsVisible] = useState(true)


    useEffect(() => {
        setIsListening(false)
        setDialect(dialects[0])
        console.log(dialects)
        setDialectsVisible(dialects.length > 1)
        // eslint-disable-next-line
    }, [dialects])

    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note])
        setNote('')
    }

    const languageOptions = languages.map((option, index) => new Option(option[0], index))

    return (
        <>
            <h1>Voice Notes</h1>
            <div className="container">
                <div className="box">
                    <h2>Current Note</h2>
                    <Status message={status}/>
                    <Select options={languageOptions} defaultValue={languageOptions[englishIndex]}
                            onChange={(option) => setLanguage(option.value)}
                            className='react-select-container' classNamePrefix="react-select"/>
                    <Select options={dialects}
                            value={dialect}
                            onChange={(option) => setDialect(option)}
                            className='react-select-container' classNamePrefix="react-select"
                            placeholder={"Select Culture/Dialect..."}
                            style={{visibility: dialectsVisible ? 'visible': 'hidden' }}
                    />

                    <div>

                    </div>


                    <div style={{width: 100 + "%"}}>
                        <div id="div_start">
                            <button id="start_button" onClick={() => setIsListening(prevState => !prevState)}
                                    style={{display: 'inline-block', visibility: dialect ? 'visible': 'hidden' }}>
                                <img alt="Start" src={isListening ? RecordingMic : Mic}/>
                            </button>
                        </div>
                        <div style={{width: 100 + "%", minHeight: 300, border: 'solid 1px'}}>{note}</div>
                    </div>

                    <button onClick={handleSaveNote} disabled={!note}>
                        Save Note
                    </button>
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
