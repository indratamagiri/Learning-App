import React from 'react'
import {View, Image, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {Rating} from 'react-native-ratings'
import {Dasboard, Profile} from '../Images'
import font from '../Themes/Fonts'
import colors from '../Themes/Colors'
import metric from '../Themes/Metrics'

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 230,
    height: 100,
  },
  container: {
    width: 230,
    shadowColor: colors.gray,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    borderRadius: 6,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginBottom: metric.baseMargin,
    marginHorizontal: metric.baseMargin,
  },
  textTitle: {
    ...font.style.h6,
  },
  textContainer: {
    margin: metric.baseMargin,
  },
  imageAuthor: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  author: {
    flexDirection: 'row',
  },
  nameAuthor: {
    marginLeft: metric.baseMargin,
  },
  textNameAuthor: {
    fontSize: font.size.medium,
  },
  rating: {
    flexDirection: 'row',
  },
  textRating: {
    paddingLeft: metric.smallMargin,
  },
  priceText: {
    fontSize: font.size.small,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginLeft: metric.smallMargin,
  },
})

const Card = ({cart, ratingView}) => {
  const singleCart = () => {
    return cart.map(() => {
      return (
        <TouchableOpacity key={Math.random()}>
          <View elevation={1} style={styles.container}>
            <Image style={styles.image} source={Dasboard} />

            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>Innovative People: Boosting Your Business</Text>
              <Text>Motivation</Text>
            </View>

            <View style={styles.textContainer}>
              <View style={styles.author}>
                <Image style={styles.imageAuthor} source={Profile} />

                <View style={styles.nameAuthor}>
                  <Text style={styles.textNameAuthor}>Cyntha Aghta</Text>
                  <Text>Instruktur</Text>

                  {ratingView ? (
                    <View>
                      <View style={styles.rating}>
                        <Rating style={{marginTop: 5}} ratingCount={5} imageSize={15} />
                        <Text style={styles.textRating}>(11 Ulasan)</Text>
                      </View>

                      <View style={styles.rating}>
                        <Text>Rp. 100.000</Text>
                        <Text style={styles.priceText}>Rp. 200.000</Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    })
  }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginTop: metric.baseMargin, flexDirection: 'row'}}>
      {singleCart()}
    </ScrollView>
  )
}

export default Card
