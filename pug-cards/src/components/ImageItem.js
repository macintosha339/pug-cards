import React from 'react'
import PropTypes from 'prop-types'

const ImageItem = ({ imageName }) => {
    return pug`
      img.post(src="https://raw.githubusercontent.com/macintosha339/pug-cards/main/pug-cards/src/assets/img/"+ imageName alt="logo" width="164" height="164")
    `;
}

ImageItem.propTypes = {
    imageName: PropTypes.string.isRequired,
}

export default ImageItem;