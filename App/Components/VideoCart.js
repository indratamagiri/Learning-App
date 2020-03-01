import React from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'
import {ListImage} from '../Images'
import metric from '../Themes/Metrics'
import font from '../Themes/Fonts'
import color from '../Themes/Colors'

const styles = StyleSheet.create({
  image: {
    height: 78,
    width: 120,
  },
  constiner: {
    flexDirection: 'row',
    marginBottom: metric.doubleBaseMargin,
  },
  description: {
    marginLeft: metric.doubleBaseMargin,
    flex: 1,
  },
  textTitle: {
    ...font.style.titleNormal,
  },
  owner: {
    ...font.style.tiny,
    color: color.gray,
    paddingVertical: metric.smallMargin,
  },
  view: {
    ...font.style.small,
  },
})

const VideoCart = () => {
  return (
    <View style={styles.constiner}>
      <Image source={ListImage} style={styles.image} />

      <View style={styles.description}>
        <Text style={styles.textTitle}>Innovative People: Boosting Your Business</Text>
        <Text style={styles.owner}>Oleh Cindy Jayi</Text>
        <Text style={styles.view}>400 Views</Text>
      </View>
    </View>
  )
}

export default VideoCart
