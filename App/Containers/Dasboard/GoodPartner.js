import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import metric from '../../Themes/Metrics'
import font from '../../Themes/Fonts'
import {FieldPartner} from '../../Components'

const styles = StyleSheet.create({
  textHead: {
    ...font.style.h6,
  },
  constainer: {
    marginTop: metric.quatBaseMargin,
    marginHorizontal: metric.doubleBaseMargin,
  },
})

const GoodPartner = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.textHead}>Partner Terbaik</Text>

      <FieldPartner cart={['text', 'text']} />
    </View>
  )
}

export default GoodPartner
