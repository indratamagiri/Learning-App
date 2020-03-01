/* eslint-disable import/no-cycle */
import React from 'react'
import {ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types'
import colors from '../Themes/Colors'
import Spinner from './Spinner'

const LoadingSpin = ({condition, children, color, size, style}) => {
  return condition ? <Spinner color={color} size={size} style={style} /> : children
}

LoadingSpin.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  style: ViewPropTypes.style,
}

LoadingSpin.defaultProps = {
  color: colors.red_light,
  size: 'large',
  style: {},
}

export default LoadingSpin
