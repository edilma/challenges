export default function Color({name,hex}){
    return(
        <div className="color-square"
        style={{backgroundColor: hex}}>
       
            <h2>{name}</h2>
      
        </div>
    )
}