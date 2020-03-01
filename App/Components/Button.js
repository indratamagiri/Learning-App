import React from 'react'
import {TouchableOpacity, ActivityIndicator, View, Text} from 'react-native'
import RenderIf from './RenderIf'
import applicationStyle from '../Themes/ApplicationStyles'
import Metric from '../Themes/Metrics'
import Colors from '../Themes/Colors'
import Font from '../Themes/Fonts'

const styles = {
  button: {
    ...applicationStyle.button.primary,
    paddingVertical: Metric.tripleBaseMargin / 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 40,
  },
  text: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Font.size.regular,
  },
  indicator: {
    alignItems: 'center',
  },
}

const Button = ({
  styleText,
  activityIndicatorColor,
  onPress,
  disabled,
  containerStyle,
  children,
  isFetching,
  noMargin,
}) => {
  const buttonStyle = () => {
    return styles.button
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle(), !noMargin ? containerStyle : {}]}
      disabled={disabled}>
      <View>
        <RenderIf condition={!isFetching}>
          <Text style={[styles.text, styleText]}>{children}</Text>
        </RenderIf>
        <RenderIf condition={isFetching}>
          <ActivityIndicator
            style={styles.indicator}
            color={activityIndicatorColor || Colors.snow}
            size={27}
          />
        </RenderIf>
      </View>
    </TouchableOpacity>
  )
}

export default Button
