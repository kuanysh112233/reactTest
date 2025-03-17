import React from 'react'

export default function Login() {
  const [login,SetLogin] = useState(()=>{
    let save 
  }) 
  return (
    <>
      <button onClick={()=>SetLogin()}></button>
    </>
  )
}
<form>
<input type="mail" placeholder='mail.......'/>
<input type="password" placeholder='password.......' />
</form>