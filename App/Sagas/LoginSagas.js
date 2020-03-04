/* eslint-disable import/prefer-default-export */
/* ***********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the Infinite Red Slack channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 ************************************************************ */

import {call, put} from 'redux-saga/effects'
import {Buffer} from 'buffer'
import {ToastAndroid} from 'react-native'
import LoginActions from '../Redux/LoginRedux'
import {navigate} from '../Services/Navigation'
import Token from '../Redux/TokenRedux'
// import { LoginSelectors } from '../Redux/LoginRedux'

export function* getLogin(api, action) {
  const {data} = action
  // get current data from Store
  // const currentData = yield select(LoginSelectors.getData)
  // make the call to the api
  const hash = new Buffer(`${data.username}:${data.password}`).toString('base64')
  const response = yield call(api.login, hash)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(navigate('MainStack'))
    yield put(LoginActions.loginSuccess(response.data))
    yield put(Token.tokenData(response.data))
  } else {
    ToastAndroid.show('Username dan password salah', ToastAndroid.LONG)
    yield put(LoginActions.loginFailure())
  }
}
