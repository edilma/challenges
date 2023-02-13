import { useState } from "react";

export default function DarkMode(){
    const [darkMode, setDarkMode] =useState(false);
    
    return(
    <div className={`page${darkMode &&'darkScreen'}`}>
        <button className="darkMode-button" 
        onClick={()=>setDarkMode(true)}>
            Dark Mode</button>
        <button className="lightMode-button" 
        onClick={()=>setDarkMode(false)}>
            Light Mode</button>
    </div>
    )
}