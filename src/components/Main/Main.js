import React from 'react';
import About from './About';
import Menu from './Menu';
import ReservePage from '../Reserve/ReservePage';
import Contact from './Contact';

export default function Main() {
  return (
    <main>
      <hr />
      <About />
      <hr />
      <Menu />
      <hr />
      <ReservePage />
      <hr />
      <Contact />
      <hr />
    </main>
  )
}