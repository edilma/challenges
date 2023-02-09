import { css } from "@emotion/react";
import Color from "./Colors";

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

export default function ColorRenderer ({name, hex, id}){

    return(
        <div >
        {colors.map(color=><Color key={id} hex={color.hex} name={color.name}/>)}
        </div>
        
    )
}
