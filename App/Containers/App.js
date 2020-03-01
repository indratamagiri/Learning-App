import '../Config'
import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import DebugConfig from '../Config/DebugConfig'
import RootContainer from './RootContainer'
import createStore from '../Redux'

// create our store
const store = createStore()

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  )
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App)
