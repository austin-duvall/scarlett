import React from 'react';
import charlie from '../../icons_assets/charlie.png'
import exterior from '../../icons_assets/exterior.png'

export default function About() {
  return (
    <article className='aboutArticle' id='about'>
      <section className='aboutContent'>
        <img src={charlie} id='charlie' alt='Chef Charlie'/>
        <h1 id='story'>The Story</h1>
        <p id='para1'>Nestled in the heart of Seattle, Chef Charlie Graves has curated a culinary haven that seamlessly blends his global expertise with the vibrant flavors of the Pacific Northwest. After honing his craft as a sous chef in prestigious fine-dining establishments in New York and London, Chef Graves returned to his hometown to fulfill a culinary dream. His debut restaurant, Scarlett, is an ode to the diverse influences that have shaped his culinary journey.</p>
        <p id='para2'>At Scarlett, diners embark on a gastronomic adventure where each dish tells a story of precision, passion, and innovation. The menu reflects the chef's commitment to sourcing the finest local ingredients, embracing the bountiful offerings of the Seattle region. From meticulously crafted seafood creations paying homage to the city's maritime heritage to elevated plant-based dishes inspired by the lush surroundings, every plate is a testament to Chef Graves' dedication to culinary excellence.</p>
        <p id='para3'>With an ambiance that exudes sophistication, Scarlett invites patrons to experience the culmination of Chef Charlie Graves' culinary odyssey, creating a haven where Seattle's rich culinary traditions meet the world's finest flavors.</p>
        <img src={exterior} id='patio' alt='Outdoor patio'/>
        <hr />
        <h1 id='space'>The Space</h1>
        <p>We are thrilled to introduce you to Scarlett's new home, thoughtfully designed by architect Art Vandelay and transformed from an historic Seattle wool factory into a chic dining environment flooded with natural light. The instant you cross our threshold, you find yourself immersed in an ambience of sophisticated taste and enduring allure. Our carefully planned venue showcases a fusion of timeless and contemporary elements, tasteful embellishments, and an intimate setting that creates the backdrop for an unforgettable dining venture.</p>
        <p>For those in search of an exclusive gathering, Scarlett is pleased to provide private rooms tailored for parties of 8 or more. These secluded spaces offer an intimate haven for celebrations, corporate meetings, or special occasions, ensuring a personalized touch to your affair.</p>
      </section>
    </article>
  )
}