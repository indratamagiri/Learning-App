import React from 'react'
import {StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Dasboard from '../Dasboard'
import Search from '../Search'
import MyCourse from '../MyCourse'
import Corporate from '../Corporate'
import colors from '../../Themes/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom: 5,
    alignSelf: 'center',
    fontSize: 10,
  },
  textActive: {
    color: colors.red_light,
  },
})

export default createBottomTabNavigator(
  {
    DashboardScreen: {
      screen: Dasboard,
      navigationOptions: {
        title: 'Dashboard',
        headerLeft: null,
        tabBarLabel: ({focused}) => (
          <Text translate bodySubtext style={[styles.text, focused && styles.textActive]}>
            Dashboard
          </Text>
        ),
        tabBarIcon: () => <Icon name="home" size={20} />,
      },
    },
    SearchScreen: {
      screen: Search,
      navigationOptions: {
        title: 'Search',
        headerLeft: null,
        tabBarLabel: ({focused}) => (
          <Text translate bodySubtext style={[styles.text, focused && styles.textActive]}>
            Search
          </Text>
        ),
        tabBarIcon: () => <Icon name="search1" size={20} />,
      },
    },
    MyCourseScreen: {
      screen: MyCourse,
      navigationOptions: {
        title: 'Search',
        headerLeft: null,
        tabBarLabel: ({focused}) => (
          <Text translate bodySubtext style={[styles.text, focused && styles.textActive]}>
            My Course
          </Text>
        ),
        tabBarIcon: () => <Icon name="playcircleo" size={20} />,
      },
    },
    CorporateScreen: {
      screen: Corporate,
      navigationOptions: {
        title: 'Corporate',
        headerLeft: null,
        tabBarLabel: ({focused}) => (
          <Text translate bodySubtext style={[styles.text, focused && styles.textActive]}>
            Corporate
          </Text>
        ),
        tabBarIcon: () => <Icon name="laptop" size={20} />,
      },
    },
  },
  {
    initialRouteName: 'DashboardScreen',
    backBehavior: 'none',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      style: {
        borderTopWidth: 2,
        elevation: 0,
        height: 50,
      },
      renderIndicator: () => null,
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
  }
)
