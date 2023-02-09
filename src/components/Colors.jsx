export default function Color({name,hex}){
    return(
        <article style={{backgroundColor: hex}}>
            <h2>{name}</h2>
        </article>
    )
}