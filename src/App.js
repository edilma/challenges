
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import ColorPicker from './components/ColorPicker.jsx';
import PixelArt from './components/PixelArt.jsx';
import Calulator from './scenes/Calculator.jsx';
import DarkLightModes from './scenes/DarkLightModes.jsx';
import DogPicsDisp from './scenes/DogPicsDisp.jsx';
import FormVal from './scenes/FormVal.jsx';
import PixelGame from './scenes/PixelGame.jsx';
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
        * Validation Form (fix styling) /form<br/> 
        * Dog Pics /dogs<br/>
        * Score Keeper /event <br/>
        * Window Listener (fix pop up alert)
        * Change Backgroundcolor Page /change <br/>
        * Pixel Art game - select color <br/>
        * Calculator - simple calculator <br/>

     
      </p>
    <Routes>
      
      <Route path='/colors' element={<RenderColors />}   />
      <Route path='/darkMode' element={<DarkLightModes />}/>
      <Route path='/form' element={<FormVal/>}/>
      <Route path='/dogs' element={<DogPicsDisp/>}/>
      <Route path='/scores' element={<ScoreKeeperDisp />}/>
      <Route path='/event' element={<WindowListener />} />
      <Route path='/change' element={<ColorPicker />}/>
      <Route path='/game' element={<PixelArt />}/>
      <Route path='/calculator' element={<Calulator />}/>
    </Routes>
    </header>
  </div>
  </BrowserRouter>  
  );
}

export default App;
