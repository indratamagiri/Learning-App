import {takeLatest, all} from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import {StartupTypes} from '../Redux/StartupRedux'
import {GithubTypes} from '../Redux/GithubRedux'
import {LoginTypes} from '../Redux/LoginRedux'

/* ------------- Sagas ------------- */

import {startup} from './StartupSagas'
import {getUserAvatar} from './GithubSagas'
import {getLogin} from './LoginSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.APP_REQUEST, startup, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, getLogin, api),
    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
  ])
}
