import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] = useState(parseInt(localStorage.getItem("score"))||0)
    
  //useEffect will run if (depending) the score changes
    useEffect(()=>{
        // save the score in the local storage -  Key = "score"
        localStorage.setItem("score",score)
    },[score])

//setScore is used to set the score.  

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(score => score + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
    </div>
  )
}