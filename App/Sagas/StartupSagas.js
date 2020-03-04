/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import {put, select, delay, call} from 'redux-saga/effects'
import {navigate} from '../Services/Navigation'
import StartupActions from '../Redux/StartupRedux'
// exported to make available for tests

// process STARTUP actions
export function* startup(api, action) {
  yield delay(500)
  const {startPage} = yield select()

  const response = yield call(api.checkLogin)

  if (response.authenticated) {
    yield put(navigate('MainStack'))
  } else if (startPage.data) {
    yield put(navigate('AuthStack'))
  } else {
    yield put(navigate('IntoRouteStack'))
  }

  yield put(StartupActions.appSuccess())
}

// if (__DEV__ && console.tron) {
//   // straight-up string logging
//   console.tron.log("Hello, I'm an example of how to log via Reactotron.")

//   // logging an object for better clarity
//   console.tron.log({
//     message: 'pass objects for better logging',
//     someGeneratorFunction: selectAvatar,
//   })

//   // fully customized!
//   const subObject = {a: 1, b: [1, 2, 3], c: true}
//   subObject.circularDependency = subObject // osnap!
//   console.tron.display({
//     name: '🔥 IGNITE 🔥',
//     preview: 'You should totally expand this',
//     value: {
//       '💃': 'Welcome to the future!',
//       subObject,
//       someInlineFunction: () => true,
//       someGeneratorFunction: startup,
//       someNormalFunction: selectAvatar,
//     },
//   })
// }
// const avatar = yield select(selectAvatar)
// // only get if we don't have it yet
// if (!is(String, avatar)) {
//   yield put(GithubActions.userRequest('GantMan'))
// }
