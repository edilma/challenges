import { useEffect, useState } from "react"


const getDogPic = async() =>{
    const picfromApi = await fetch ('https://dog.ceo/api/breeds/image/random')
    const dogPic = await picfromApi.json()
    return dogPic.message
}

export default function DogPics () {
    const [pic, setPic] =useState("")
    // API: https://dog.ceo/dog-api/
 
    useEffect(()=>{
        getDogPic()
        .then (pic=>setPic(pic))
        //.catch(error => console.error)
    },[])
    

    return (
      <div className='dog-pics'>
        <img src={pic} />
        <button onClick={async e=> setPic(await(getDogPic()))}>🐶</button>
      </div>
    )
  }