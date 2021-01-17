/* eslint-disable react-pug/no-broken-template */
/* eslint-disable react-pug/pug-lint */
/* eslint-disable react-pug/no-interpolation */
import React from 'react'
import PropTypes from 'prop-types'
import SocialItem from './SocialItem'

const SocialList = ({ socials }) => {
    return pug`
    ${socials.map((item, index) => pug`SocialItem(key=${index} value=${item.value} followers=${item.followers})`)}
    `;
}

SocialList.propTypes = {
    socials: PropTypes.array.isRequired,
}

export default SocialList;