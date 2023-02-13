
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import DarkLightModes from './scenes/DarkLightModes.jsx';
import RenderColors from './scenes/RenderColors.jsx';


function App() {
  return (
  <BrowserRouter>
  <div className='App'>
    <header className='App-Header'>
      <h1>React Code Challenges</h1>
      <p>Links that need to put here:<br/>
        * RenderColors<br/>
        * Dark Mode
     
      </p>
    <Routes>
      
      <Route path='/colors' element={<RenderColors />}   />
      <Route path='/darkMode' element={<DarkLightModes />}/>

    </Routes>
    </header>
  </div>
  </BrowserRouter>  
  );
}

export default App;
