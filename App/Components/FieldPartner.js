import React from 'react'
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Partner} from '../Images'
import font from '../Themes/Fonts'
import colors from '../Themes/Colors'
import metric from '../Themes/Metrics'
import Button from './Button'

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingVertical: metric.doubleBaseMargin,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    flexDirection: 'row',
  },
  desribe: {
    marginLeft: metric.baseMargin,
  },
  review: {
    flexDirection: 'row',
    marginTop: metric.smallMargin,
  },
  textName: {
    ...font.style.h6,
  },
  textDes: {
    padding: 2,
    fontSize: font.size.small,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  textButton: {
    color: colors.black,
    paddingHorizontal: metric.doubleBaseMargin,
    ...font.style.button,
  },
})

const Card = ({cart}) => {
  const singleCart = () => {
    return cart.map(() => {
      return (
        <View key={Math.random()} style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Image source={Partner} style={styles.image} />

            <View style={styles.desribe}>
              <Text style={styles.textName}>Ibnu Nagal</Text>

              <View style={styles.review}>
                <Icon style={{padding: 2}} name="chat-bubble-outline" size={16} />
                <Text style={styles.textDes}>140 Ulasan</Text>
              </View>

              <View style={styles.review}>
                <Icon style={{padding: 2}} name="sentiment-satisfied" size={16} />
                <Text style={styles.textDes}>140 Perserta</Text>
              </View>

              <View style={styles.review}>
                <Icon style={{padding: 2}} name="collections-bookmark" size={16} />
                <Text style={styles.textDes}>10 kursur</Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button containerStyle={styles.button} styleText={styles.textButton}>
              Bergabung
            </Button>
          </View>
        </View>
      )
    })
  }
  return <ScrollView showsHorizontalScrollIndicator={false}>{singleCart()}</ScrollView>
}

export default Card
