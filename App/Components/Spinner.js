import React from 'react'
import {ActivityIndicator} from 'react-native'
import colors from '../Themes/Colors'

export default class Spinner extends React.Component {
  setStyle() {
    const {noDefaultStyle} = this.props
    if (!noDefaultStyle) {
      return {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        height: 80,
      }
    }
    return null
  }

  render() {
    const {style, size, color} = this.props
    return (
      <ActivityIndicator
        animating
        style={[this.setStyle(), style]}
        size={size || 'large'}
        color={color || colors.red_login}
      />
    )
  }
}
