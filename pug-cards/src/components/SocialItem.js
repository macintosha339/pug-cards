/* eslint-disable react-pug/no-interpolation */
import React from 'react'
import PropTypes from 'prop-types'


const SocialItem = ({ value, followers }) => {
    return pug`
      div.item-social
        img(src="https://raw.githubusercontent.com/macintosha339/pug-cards/main/pug-cards/src/assets/icons/" + value + ".svg" alt="icon")
            
        p.followers ${followers}
            
        p.name-social ${value}
    `;
}

SocialItem.propTypes = {
    value: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
}

export default SocialItem;