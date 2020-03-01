import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Card} from '../../Components'
import metric from '../../Themes/Metrics'
import font from '../../Themes/Fonts'

const styles = StyleSheet.create({
  constainer: {
    marginTop: metric.quatBaseMargin,
    marginHorizontal: metric.baseMargin,
  },
  textHead: {
    ...font.style.h6,
    marginHorizontal: metric.baseMargin,
  },
  aboutUs: {
    marginTop: metric.quatBaseMargin,
  },
  img: {
    marginTop: metric.baseMargin,
    marginHorizontal: metric.baseMargin,
  },
})

const FanCourse = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.textHead}>Video-video asik</Text>
      <Card cart={['text', 'text', 'text']} />
    </View>
  )
}

export default FanCourse
