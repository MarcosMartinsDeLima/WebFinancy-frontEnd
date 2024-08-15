import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'
import imagem from '../assets/dashboard.png'

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
        <NavLink to={'/'} className={styles.marca}>Web<span>Financy</span></NavLink>
        <ul>
            <li>
                <NavLink to={'/user/create'} className={styles.criar}>Criar Conta</NavLink>    
            </li>
            <li>
                <NavLink to={'/user/login'} className={styles.entrar}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to={'/user/dashboard'}>
                <img src={imagem} alt="dashboard" />
              </NavLink>  
            </li>    
        </ul>
    </div>
  )
}
