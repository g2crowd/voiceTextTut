import {useEffect, useState} from "react";
import {languages} from "./languages";

const getDialects = (language)=> {
    const selected_language_cultures = languages[language].slice(1)
    return selected_language_cultures.map((option,index) => new Option(option[1], option[0]))
}

export const useLanguage = (defaultLanguage) => {
    const [language, setLanguage] = useState(defaultLanguage)
    const [dialects, setDialects] = useState(getDialects(defaultLanguage))

    useEffect(()=>{
        setDialects(getDialects(language))
    },[language]);


    return [dialects, setLanguage]
}