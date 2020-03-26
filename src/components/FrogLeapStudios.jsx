import React from 'react'
import FrogLeapStudiosBandPhoto from '../images/FrogLeapStudiosBandPhoto.jpg'
import FrogLeapChandelier from '../images/FrogLeapChandelier.jpg'
import FrogLeapSpiderman from '../images/FrogLeapSpiderman.jpg'
import FrogLeapLivingOnAPrayer from '../images/FrogLeapLivingOnAPrayer.jpg'

const FrogLeapStudios = () => {
  return (
    <div>
      <ul>
        <h1>Frog Leap Studios!</h1>
        <section class="container">
          <img
            class="band-photo"
            src={FrogLeapStudiosBandPhoto}
            alt="frog leap studios band photo"
          />
        </section>
        <div class="container">
          <section class="albums">
            <ul>
              <li>
                Chandelier Cover
                <img class="album" src={FrogLeapChandelier} />
              </li>
              <li>
                Spider Man Cover
                <img src={FrogLeapSpiderman} />
              </li>
              <li>
                Living on a Prayer
                <img src={FrogLeapLivingOnAPrayer} />
              </li>
            </ul>
          </section>
        </div>
      </ul>
    </div>
  )
}
export default FrogLeapStudios
