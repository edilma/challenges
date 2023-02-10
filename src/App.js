
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import RenderColors from './scenes/RenderColors.jsx';


function App() {
  return (
  <BrowserRouter>
  <div className='App'>
    <header className='App-Header'>
      <h1>React Code Challenges</h1>
      <p>Links that need to put here:
        <ul>
          <li>Render Colors</li>
        </ul>
      </p>
    <Routes>
      
      <Route path='/colors' element={<RenderColors />}   />
    </Routes>
    </header>
  </div>
  </BrowserRouter>  
  );
}

export default App;
