import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Card, VideoImage} from '../../Components'
import metric from '../../Themes/Metrics'
import font from '../../Themes/Fonts'
import {us} from '../../Images'

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

const GoodCourse = ({navigation}) => {
  return (
    <View style={styles.constainer}>
      <View>
        <Text style={styles.textHead}>Kursus Paling Keren</Text>
        <Card ratingView cart={['text', 'text', 'text']} />
      </View>

      <View style={styles.aboutUs}>
        <Text style={styles.textHead}>Tentang ylreal23</Text>
        <VideoImage
          style={styles.img}
          url={us}
          onPress={() => navigation.navigate('DetailCourseScreen')}
        />
      </View>
    </View>
  )
}

export default GoodCourse
