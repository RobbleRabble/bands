import React from 'react'
import BreakingBenjaminBandPhoto from '../images/BreakingBenjaminBandPhoto.jpg'
import Saturate from '../images/Saturate.jpg'
import Phobia from '../images/Phobia.jpg'
import DearAgony from '../images/DearAgony.jpg'

// import Band from './components/Band'

const BreakingBenjamin = () => {
  return (
    <div>
      <ul>
        <h1>Breaking Benjamin</h1>
        <section class="container">
          <img
            class="band-photo"
            src={BreakingBenjaminBandPhoto}
            alt="breaking benjamin band photo"
          />
        </section>
        <div class="container">
          <section class="albums">
            <ul>
              <li>
                Saturate
                <img class="album" src={Saturate} />
                <p>
                  Saturate is the debut studio album by American rock band
                  Breaking Benjamin. It was released on August 27, 2002. The
                  album features three singles, including "Polyamorous", "Skin",
                  and "Medicate". The album was certified gold by the RIAA on
                  September 15, 2015.
                </p>
              </li>
              <li>
                Phobia
                <img src={Phobia} />
                <p>
                  Phobia is the third studio album by American rock band
                  Breaking Benjamin. It was recorded at The Barbershop Studios
                  in Hopatcong, New Jersey, and released on August 8, 2006,
                  through Hollywood Records and in Europe on November 21, 2007.
                </p>
              </li>
              <li>
                Dear Agony
                <img src={DearAgony} />
                <p>
                  Dear Agony is the fourth studio album by American rock band
                  Breaking Benjamin. It was released on September 29, 2009. A
                  Best Buy edition, Japanese import version, and Zune exclusive
                  version were also released, all of which feature bonus
                  content. This is the last album to contain work from all
                  featured band members except Benjamin Burnley due to the legal
                  issues between Burnley and the two members Aaron Fink and Mark
                  Klepaski during 2011, and drummer Chad Szeliga departing in
                  2013 over creative differences.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </ul>
    </div>
  )
}

export default BreakingBenjamin
