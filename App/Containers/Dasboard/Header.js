import React from 'react'
import {View, StyleSheet, ImageBackground, TouchableOpacity, Text, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {Dasboard} from '../../Images'
import colors from '../../Themes/Colors'
import metric from '../../Themes/Metrics'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  cart: {
    margin: metric.baseMargin,
    alignItems: 'flex-end',
  },
  categoryBox: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerBox: {
    marginHorizontal: metric.smallMargin,
    height: 50,
    borderRadius: 6,
    shadowOpacity: 0.8,
    borderWidth: 1,
    width: 120,
  },
})

const Header = ({itemCategory}) => {
  const Category = () => {
    return itemCategory.map(item => {
      const nameIcon = item.icon

      return (
        <View key={Math.random()} style={styles.containerBox}>
          <View style={styles.categoryBox}>
            <Icon name={nameIcon} color={colors.red} size={20} />

            <Text style={{marginLeft: metric.baseMargin}}>{item.text}</Text>
          </View>
        </View>
      )
    })
  }
  return (
    <View style={styles.component}>
      <View style={{height: 140}}>
        <ImageBackground source={Dasboard} style={styles.backgroundImage}>
          <TouchableOpacity style={styles.cart}>
            <Icon name="shopping-cart" size={25} color={colors.panther} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: metric.baseMargin, flexDirection: 'row'}}>
        {Category()}
      </ScrollView>
    </View>
  )
}

export default Header
