import React from 'react';
import logo from '../icons_assets/logoCondensedWhite.png'

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt='Scarlett Logo'/>

      <p>1723 First Avenue South</p>
      <p>Seattle, WA 98134</p>

      <p id='scarlettCopyright'>&copy; 2023 Scarlett. All Rights Reserved.</p>
    </footer>
  )
}