import React from 'react'
import BlinkOneBandPhoto from '../images/BlinkOneBandPhoto.jpg'
import EnemaOfTheState from '../images/EnemaOfTheState.jpg'
import DudeRanch from '../images/DudeRanch.jpg'
import Fifth from '../images/Fifth.jpeg'
const Blink182 = () => {
  return (
    <div>
      <ul>
        <h1>Blink-182</h1>
        <section class="container">
          <img
            class="band-photo"
            src={BlinkOneBandPhoto}
            alt="frog leap studios band photo"
          />
        </section>
        <div class="container">
          <section class="albums">
            <ul>
              <li>
                Enema Of The State
                <img class="album" src={EnemaOfTheState} />
                <p>
                  Enema of the State is the third studio album by American rock
                  band Blink-182, released on June 1, 1999, by MCA Records.
                  After a long series of performances at various clubs and
                  festivals and several indie recordings throughout the 1990s,
                  Blink-182 first achieved popularity on the Warped Tour and in
                  Australia following the release of their second album Dude
                  Ranch (1997) and its rock radio hit "Dammit". To record their
                  third album, Blink-182 turned to veteran punk rock producer
                  Jerry Finn, who previously worked on Green Day's breakthrough
                  album Dookie (1994). Enema was the band's first album to
                  feature second drummer Travis Barker, who replaced original
                  drummer Scott Raynor.
                </p>
              </li>
              <li>
                Dude Ranch
                <img src={DudeRanch} />
                <p>
                  Dude Ranch is the second studio album by American rock band
                  Blink-182, released on June 17, 1997, by Cargo Music and MCA
                  Records, making it their major record label debut. MCA signed
                  the band in 1996 following moderate sales of their 1995 debut
                  Cheshire Cat and their growing popularity in Australia.
                </p>
              </li>
              <li>
                2003 Album (self titled)
                <img src={Fifth} />
                <p>
                  Blink-182 is the fifth studio album by American rock band
                  Blink-182, released on November 18, 2003 by Geffen Records.
                  Following their ascent to stardom and success of their prior
                  two releases, the trio was compelled to take a break and
                  subsequently participated in various side projects (Box Car
                  Racer and Transplants). When they regrouped, they felt
                  inspired to approach song structure and arrangements
                  differently on their next effort together.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </ul>
    </div>
  )
}

export default Blink182
