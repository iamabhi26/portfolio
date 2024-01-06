import React from 'react'
import './index.css'

const Header = () => {
  return (
    <div className='main-container'>
        <h1 className='name-heading'>Abhishek Pindipolu</h1>
        <ul className='header-list-container'>
            <li className='header-list'>About</li>
            <li className='header-list'>Projects</li>
            <li className='header-list'>Contacts</li>
        </ul>
    </div>
  )
}
export default Header