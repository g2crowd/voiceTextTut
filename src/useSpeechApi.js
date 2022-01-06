import {useEffect, useState} from "react";

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true

export const useSpeechApi = (defaultDialect) => {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [dialect, setDialect] = useState(defaultDialect)


    mic.onresult = event => {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')
        setNote(transcript)
        mic.onerror = event => {
            console.log(event.error)
        }
    }

    useEffect(()=>{
        mic.lang = dialect
    }, [dialect])

    useEffect(() => {
        if (isListening) {
            mic.start()
        } else {
            mic.stop()
        }
    }, [isListening])


    return [note, setNote, isListening, setIsListening, setDialect];
}