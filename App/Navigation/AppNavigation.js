import {createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
// import LaunchScreen from '../Containers/LaunchScreen'
import Login from '../Containers/Login'
import Intorduction from '../Containers/Introduction'
import Tab from '../Containers/Tab'
import DetailCourse from '../Containers/DetailCourse'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const AfterAuthRoutes = createStackNavigator(
  {
    IntorductionScreen: {screen: Intorduction},
    TabScreen: {screen: Tab},
    DetailCourseScreen: {screen: DetailCourse},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'TabScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  }
)

const BeforeAuthRoutes = createStackNavigator(
  {
    LoginScreen: {screen: Login},
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  }
)

const IntoRoute = createStackNavigator(
  {
    IntorductionScreen: {screen: Intorduction},
  },
  {
    headerMode: 'none',
    initialRouteName: 'IntorductionScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  }
)

const PrimaryNav = createSwitchNavigator({
  AuthStack: {screen: BeforeAuthRoutes},
  IntoRouteStack: {screen: IntoRoute},
  MainStack: {screen: AfterAuthRoutes},
})

export default PrimaryNav
