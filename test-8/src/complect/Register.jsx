import React, { useEffect, useState } from 'react'

export default function Register() {
const [register,setRegister] = useState(()=>{
  let saveregister = localStorage.setItem('info')
})
useEffect(()=>{
  const info = localStorage.getItem('info')
},[register])
  return (
    <>
    <form>
      <input type="text" placeholder='name...........'/>
      <input type="mail" placeholder='mail...........'/>
      <input type="password" placeholder='password...'/>
      <button onClick={()=>setRegister()}>Register</button>
    </form>
    </>
  )
}
