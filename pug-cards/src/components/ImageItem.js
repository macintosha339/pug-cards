import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({ imageName }) => {
    return pug`
      img(src="https://raw.githubusercontent.com/macintosha339/pug-cards/main/pug-cards/src/assets/img/"+ imageName alt="logo")
    `;
}

ImageItem.propTypes = {
    imageName: PropTypes.string.isRequired,
}

export default ImageItem;