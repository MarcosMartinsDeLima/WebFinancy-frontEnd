import React from 'react'
import { useState } from 'react'

import styles from './Login.module.css'

export const Login = () => {
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")
  const [error,setError] = useState(null)

  const url = "http://localhost:5176/api/User/login"

  const handleSubmit = async (e) =>
    {
      e.preventDefault()

      console.log(email)
      console.log(senha)

      if(email == ""){
        setError("E-mail obrigatório")
        return
      }

      if(senha == ""){
        setError("Senha é obrigatória")
        return
      }

      const loginDto = {
        'senha':senha,
        'email':email
      }
      const response  = await fetch(url,{
        method:'POST',
        body:JSON.stringify(loginDto),
        headers: {
            'Content-Type': 'application/json'
      },
      }).then(async (response)=> {
        if(response.status != 200){
          const error = await response.text()
          setError(error)
          return 
        }
        
        const token = await response.text()
        console.log(token)
        localStorage.setItem('token',token)
        setError("")          
      })

    }

  return (
    <div className={styles.formContainer}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail'/>
            </label>
            <label>
                <input type='password' name='senha' value={senha} onChange={(e)=>setSenha(e.target.value)} placeholder='Senha'/>
            </label>
            {!error && <button>Entrar</button>}
            {error && <button >Entrar</button>}
            {error && <p className='error'>{error}</p>}

        </form>
    </div>
  )
}
