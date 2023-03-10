import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const[message, setMessage] = useState('')

   // make an array of possible errors 
    const getErrors = ()=> {
        const errors =[]
        //there must be email and password
        if (!{email} || !{password} ||!{passwordConfirm}) {
       errors.push ("Email and password cannot be empty")   
         }
         //email must have 1 @ character
         if([...email].filter(i=>i==="@").length !==1){
          errors.push("The emails must have only one @")
         }
         if (password.length<=8){
          errors.push("Password must have 8 characters or more")
         }
         if(password !== passwordConfirm){
          errors.push("Password must match")
         }
         return errors
         
    }

    const handleSubmit = e=> {
      e.preventDefault()
       //process the errors and return a message 
      const errors = getErrors()
      setMessage(errors.length? errors.join(","): "You have created a user")

    }
    


  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type='submit' value='Submit' />
    </form>
  )
}