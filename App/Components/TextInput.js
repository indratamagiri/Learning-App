/* eslint-disable react/jsx-props-no-spreading */
/* eslint no-use-before-define: off */

import React from 'react'
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import color from '../Themes/Colors'
import metrics from '../Themes/Metrics'

const styles = StyleSheet.create({
  borderInput: {
    borderWidth: 1,
    borderColor: color.gray,
    paddingHorizontal: metrics.smallMargin,
    height: 40,
    borderRadius: metrics.smallMargin,
    marginVertical: metrics.baseMargin,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nonBorder: {paddingBottom: metrics.baseMargin, paddingTop: metrics.baseMargin, height: 40},
  password: {
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },
})

export default function TextField(props) {
  const {
    noLabel,
    nonBorder,
    customLabel,
    noTextField,
    children,
    error,
    style,
    password,
    secureTextEntry,
    secureTextPress,
  } = props
  return (
    <View>
      {noLabel ? null : <Text>{customLabel}</Text>}
      {noTextField ? (
        children
      ) : (
        <View style={nonBorder ? [styles.nonBorder, style] : styles.borderInput}>
          <TextInput style={{flex: 1}} {...props} autoCorrect={false} />
          {password ? (
            <TouchableOpacity onPress={secureTextPress} style={styles.password}>
              <Icon name="eye" color={secureTextEntry ? color.black : color.red_light} size={20} />
            </TouchableOpacity>
          ) : null}
        </View>
      )}
      {error && noTextField ? (
        <Text bodySubtitle style={{color: RED, marginTop: 4}}>
          {error}
        </Text>
      ) : null}
    </View>
  )
}
