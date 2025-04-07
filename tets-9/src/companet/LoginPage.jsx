import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
const[email,setEmail]=useState()
const[password,setPassword]=useState()
const[error,setError]= useState()
const navigate = useNavigate();

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Email:" ,email);
    console.log("Password:",password);

    if(!email.includes("@")){
        setError("Email -ді қате дұрыс енгізініз")
        return
    }
    if(password.length<8){
        setError("Құпия сөз 8 танбадан кем")
        return
    }
    setError("")
    navigate('/home')
}



  return (
    <div>
        <h2>WELCAME BACK</h2>
        <p>Login to your BookShelf account</p>
        <form onClick={handleSubmit}>
            <div>
            <label htmlFor="email">Email</label><br />
            <input
            name='email' 
            type="text"
            placeholder='example@domain.com '
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
            </div>
            <div>
            <label htmlFor="password">Password</label><br />
            <input 
            name='password'
            type="text"  
            placeholder='***************'
            onChange={(e)=>setPassword(e.target.value)}
            required/>
            </div><br />
            <button type='sudmit'>КІРУ</button>
            {error && <p style={{color:"red"}}>{error}</p>}
        </form>
    </div>
  )
}