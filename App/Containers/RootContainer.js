import React from 'react'
import {View, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {LoadingSpinner} from '../Components'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import StartupActions from '../Redux/StartupRedux'

// Styles
import styles from './Styles/RootContainerStyles'

const RootContainer = ({appRequest, initApp}) => {
  React.useEffect(() => {
    appRequest()
  }, [])
  // if redux persist is not active fire startup action
  return (
    <LoadingSpinner condition={!initApp}>
      <StatusBar barStyle="light-content" />
      <ReduxNavigation />
    </LoadingSpinner>
  )
}

// wraps dispatch to create nicer functions to call within our component
const mapStateToProps = state => ({
  initApp: state.startup.app,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(StartupActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer)
