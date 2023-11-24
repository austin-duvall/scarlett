import React from 'react';

export default function Nav() {
  return (
    <nav className='navContainer navContainerLarge'>
      <ul>
        <li>
          <a
            href='#about'
            onClick={e => {
              e.preventDefault();
              document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            about
          </a>
        </li>
        <li>
          <a
            href='#menu'
            onClick={e => {
              e.preventDefault();
              document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            menu
          </a>
        </li>
        <li>
          <a
            href='#reserve'
            onClick={e => {
              e.preventDefault();
              document.querySelector('#reserve').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            reservations
          </a>
        </li>
        <li>
          <a
            href='#contact'
            onClick={e => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  )
}