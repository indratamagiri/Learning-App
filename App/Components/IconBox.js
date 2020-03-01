import React from 'react'
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: '#d9d9d9',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
})

const IconBox = ({Image, styleContainer}) => {
  return (
    <View elevation={5} style={[styles.constainer, styleContainer]}>
      <Image width={30} height={30} />
    </View>
  )
}

export default IconBox
