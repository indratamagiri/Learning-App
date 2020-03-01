import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Container} from '../../Components'
import DetailVidio from './DetailVideo'
import ListVideo from './ListVideo'
import font from '../../Themes/Fonts'
import metric from '../../Themes/Metrics'
import color from '../../Themes/Colors'

const styles = StyleSheet.create({
  textTitle: {
    ...font.style.h5,
    marginBottom: metric.baseMargin,
  },
  listMargin: {
    margin: metric.doubleBaseMargin,
  },
  border: {
    marginBottom: metric.doubleBaseMargin,
    borderTopWidth: 1,
    borderTopColor: color.gray,
  },
})

const DetailCourse = ({navigation}) => {
  const [fullScreen, setFullScreen] = React.useState(false)

  return (
    <Container>
      <DetailVidio navigation={navigation} fullScreen={fullScreen} setFullScreen={setFullScreen} />
      {fullScreen ? null : (
        <View style={styles.listMargin}>
          <Text style={styles.textTitle}>
            Yukk kalian yang penasaran dengan ylreal23 bisa menonton video ini
          </Text>
          <View style={styles.border} />
          <ListVideo />
        </View>
      )}
    </Container>
  )
}

export default DetailCourse
