
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import DarkLightModes from './scenes/DarkLightModes.jsx';
import DogPicsDisp from './scenes/DogPicsDisp.jsx';
import FormVal from './scenes/FormVal.jsx';
import RenderColors from './scenes/RenderColors.jsx';
import ScoreKeeperDisp from './scenes/ScoreKeeperDis.jsx';
import WindowListener from './scenes/WindowListener.jsx';



function App() {
  return (
  <BrowserRouter>
  <div className='App'>
    <header className='App-Header'>
      <h1>React Code Challenges</h1>
      <p>Links that need to put here:<br/>
        * RenderColors /colors<br/>
        * Dark Mode /darkMode <br/>
        * Validation Form /form<br/>
        * Dog Pics /dogs<br/>
        * Score Keeper <br/>
     
      </p>
    <Routes>
      
      <Route path='/colors' element={<RenderColors />}   />
      <Route path='/darkMode' element={<DarkLightModes />}/>
      <Route path='/form' element={<FormVal/>}/>
      <Route path='/dogs' element={<DogPicsDisp/>}/>
      <Route path='/scores' element={<ScoreKeeperDisp />}/>
      <Route path='/event' element={<WindowListener />} />
    </Routes>
    </header>
  </div>
  </BrowserRouter>  
  );
}

export default App;
