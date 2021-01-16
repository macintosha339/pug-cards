import React from 'react'
import './Card.scss'

const Card = (props) => {
    return pug`
      div.card-wrapper
        div.image-block
          img(src="https://github.com/macintosha339/pug-cards/blob/main/pug-cards/src/assets/img/Image1_1.png" alt="logo")
    `;
}

export default Card;