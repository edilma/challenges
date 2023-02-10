
import Color from "./Color.jsx";
import { useNavigate } from "react-router-dom";

const colors = [{
    id: "100",
    hex: '#91A6FF',
    name: 'Cornflower Blue'
  },
  {
    id: "200",
    hex: '#FF88DC',
    name: 'Persian Pink'
  },
  {
    id: "300",
    hex: '#80FF72',
    name: 'Screamin Green'
  },
  {
    id: "400",
    hex: '#FF5154',
    name: 'Tart Orange'
  }]

export default function ColorRenderer (){

    return(
      <>
      
        {colors.map(color=> <Color key={color.id} hex={color.hex} name={color.name}/>)}
        </>
        
    )
}
