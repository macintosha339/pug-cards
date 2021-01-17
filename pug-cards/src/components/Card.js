/* eslint-disable react-pug/pug-lint */
/* eslint-disable react-pug/no-broken-template */
/* eslint-disable react-pug/no-interpolation */
import React from 'react'
import './Card.scss'
import PropTypes from 'prop-types'
import ImageItem from './ImageItem'
import SocialList from './SocialList'

// { images, avatar, name, ageGenderType, contentTopics }
const Card = ({ images, avatar, name, ageGenderType, contentTopics, socials }) => {
    return pug`
      div.card-wrapper
        div.image-block
          ${images.map((item, index) => pug`ImageItem(key=${index} imageName=${item})`)}
        
        div.info-block
          a(href="#")
            div.info-wrapper
              img.avatar(src="https://raw.githubusercontent.com/macintosha339/pug-cards/main/pug-cards/src/assets/avatar/" + avatar alt="avatar")
              
              p.name ${name}
              
              p.age-gender-type ${ageGenderType}

              p.content-topic ${contentTopics}

              div.divider
        
        div.social-block
          SocialList(socials=${socials})
    `;
}

Card.propTypes = {
  images: PropTypes.array.isReqired,
  avatar: PropTypes.string.isReqired,
  name: PropTypes.string.isReqired,
  ageGenderType: PropTypes.string.isReqired,
  contentTopics: PropTypes.string.isReqired,
  socials: PropTypes.array.isRequired,
}

export default Card;