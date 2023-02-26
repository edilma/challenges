
import { useContext,createContext, useState } from "react"

//1. Create the context that we are going to use
// to change the playColor in the grid
// it will change so i need the color and a function to change it
const playColorContext = createContext({
    playColor: 'lightGrey',
    setPlayColor: ()=>{}
})

//3. i need to pick a color and set the context with that color (no using props)
function ColorPicker () {
    const {setPlayColor} = useContext(playColorContext)

    const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
    return (
      <div>
        <h1>Choose a color</h1>
        {colors.map(color => <button 
        key={color} 
        onClick={()=>setPlayColor(color)}
        style={{ backgroundColor: color }} />)}
      </div>
    )
  }
  
  //4. The color of the pixel depends of its state
  // if there is clicked on, use the color from the context
  //no clicked use lightgrey
  function Pixel () {
      const {playColor} = useContext(playColorContext)
      const[pixelColor, setPixelColor] = useState('lightGrey')
    return <div 
    onClick={()=>setPixelColor(playColor)}
    style={{ height: '20px', width: '20px', backgroundColor: pixelColor, margin: '1px' }} />
  }
  
  function Pixels () {
    const pixels = []
    for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
        {pixels}
      </div>
    )
  }
  
  // We use context to share state between components. 
  //2. Provide the context in the higher level component that will use it
  // [I may need to pass the value that is change in the state]
  
  export default function PixelArt () {
    const[playColor, setPlayColor] = useState('lightGrey')

    return (
      <playColorContext.Provider value={{playColor,setPlayColor}} >
        <ColorPicker />
        <Pixels />
        </playColorContext.Provider>
    )
  }