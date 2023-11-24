import React from 'react';

export default function Menu() {
  return (
    <div className='dinnerMenuContainer' id='menu'>
      <article>
        <h1>Menu</h1>
        <hr />
        <section>
          <h2>Starters</h2>
          <ul>
            <li>
              <h3>Smoked Salmon Crostini</h3>
              <p>Thinly sliced smoked salmon, herbed cream cheese, capers, dill</p>
            </li>
            <li>
              <h3>Pacific Oysters Rockefeller</h3>
              <p>Creamed spinach, parmesan and breadcrumb gratin, Pernod Ricard</p>
            </li>
            <li>
              <h3>Dungeness Crab Bisque</h3>
              <p>Black truffle, sherry wine, black garlic, Old Bay </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Plates</h2>
          <ul>
            <li>
              <h3>Cedar Plank Grilled Salmon</h3>
              <p>Roasted brussels sprouts, quinoa pilaf</p>
            </li>
            <li>
              <h3>Alaskan Halibut</h3>
              <p>Saffron-infused risotto, Meyer lemon buerre blanc</p>
            </li>
            <li>
              <h3>Washington Wagyu Ribeye</h3>
              <p>Morel mushroom demi-glace, truffle-infused mashed Yukon gold potatoes</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Desserts</h2>
          <ul>
            <li>
              <h3>Huckleberry Lavender Cheesecake</h3>
              <p>Graham cracker crust, huckleberry compote</p>
            </li>
            <li>
              <h3>Espresso Chocolate Torte</h3>
              <p>Caramelized hazelnuts, dark chocolate espresso ganache</p>
            </li>
          </ul>
        </section>
        <hr className='menuHR2'/>
      </article>
    </div>
  )
}