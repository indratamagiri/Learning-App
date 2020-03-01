import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  startPageRequest: ['data'],
})

export const StartPageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: false,
})

/* ------------- Selectors ------------- */

export const StartPageSelectors = {
  getData: state => state.data,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state => state.merge({data: true})

// successful api lookup

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START_PAGE_REQUEST]: request,
})
