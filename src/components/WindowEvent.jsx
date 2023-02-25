import { useEffect } from "react"

export default function WindowEvent () {
  useEffect(() => {
    const doubleClick = () => alert('mouse pressed')

    window.addEventListener('dblclick', doubleClick)

    return () => window.removeEventListener('dblclick', doubleClick)
  }, [])
  return (
    <h2>Window event is active</h2>
  )
}
//Alert is not working.  Can it be because we get a header from app.js?