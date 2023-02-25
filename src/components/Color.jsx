//setbackgroundColor and onclick ... when i want to be able able 
//to change the background color of a bigher html element
//when clicking in the div where this color component is

export default function Color({name, hex, setBackgroundColor}){
    return(
        <div className="color-square"
        style={{backgroundColor: hex}}
        onClick={()=>{setBackgroundColor(hex)}}>
       
            <h2>{name}</h2>
      
        </div>
    )
}