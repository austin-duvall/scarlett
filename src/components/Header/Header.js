import React from 'react';
import interior from '../../icons_assets/interior.png'
import logoWhite from '../../icons_assets/logoCondensedWhite.png'
import Nav from './Nav';


export default function Header() {
  return (
    <header>
      <img src={interior} className='interiorImg' alt='Scarlett Dining Room'/>
      <img src={logoWhite} className='mainLogo' alt='Scarlett Plant Logo'/>
      <Nav />
    </header>
  )
}