import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scenes/darklightmodes.css"

// export default function DarkMode(){
//     const [darkMode, setDarkMode] =useState(false);
    
//     return(
//     <div className={`page${darkMode &&'darkScreen'}`}>
//         <button className="darkMode-button" 
//         onClick={()=>setDarkMode(true)}>
//             Dark Mode</button>
//         <button className="lightMode-button" 
//         onClick={()=>setDarkMode(false)}>
//             Light Mode</button>
//     </div>
//     )
// }


export default function DarkMode () {
    const [darkMode, setDarkMode] = useState(false)
  
    return (
      <div className={`page ${darkMode && 'dark-mode'}`}>
        <button
          className='dark-mode-button'
          onClick={() => setDarkMode(true)}
        >
          Dark Mode
        </button>
        <button
          className='light-mode-button'
          onClick={() => setDarkMode(false)}
        >
          Light Mode
        </button>
      </div>
    )
  }