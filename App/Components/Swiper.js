import React from 'react'
import {View, StatusBar, StyleSheet, Text} from 'react-native'
import Swiper from 'react-native-swiper'
import color from '../Themes/Colors'

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    marginTop: 67,
  },
  image: {
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    marginTop: 22,
  },
  text: {
    marginTop: 22,
    textAlign: 'center',
  },
})

const SwiperImage = ({data, loop}) => {
  const Images = () => {
    return data.map(item => {
      const Image = item.image

      return (
        <View key={Math.random()} style={styles.image}>
          <Image width={220} height={220} />

          <Text style={styles.title}>{item.titel}</Text>

          <Text style={styles.text}>{item.text}</Text>
        </View>
      )
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Swiper
        dot={
          <View
            style={{
              backgroundColor: color.charcoal,
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: color.orange,
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        paginationStyle={{
          bottom: 70,
        }}
        loop={loop}>
        {Images()}
      </Swiper>
    </View>
  )
}

export default SwiperImage
