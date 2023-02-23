import { useEffect } from "react"

export default function WindowEvent () {
    useEffect(()=>{
        const handleClick = ()=> alert("You click the button")

        window.addEventListener ("buttonClicked", handleClick)
        
        return(
            window.removeEventListener("buttonClicked", handleClick)
        )


    },[])
    return (
      <h2>Window event active</h2>
    )
  }