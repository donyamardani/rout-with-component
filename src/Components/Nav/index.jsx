import React from 'react'
import style from  './style.module.css'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <>
      <header className={style.header}>
        <img src="Assets/bg.jpg" alt="header page" />
        <nav className={style.nav}>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/product'}>Product</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/auth'}>SignIn</Link>
                </li>
            </ul>
        </nav>
      </header>

    </>
  )
}
