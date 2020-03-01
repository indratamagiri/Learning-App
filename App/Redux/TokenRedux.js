import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  tokenData: ['data'],
})

export const TokenTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
})

/* ------------- Selectors ------------- */

export const TokenSelectors = {
  getData: state => state.data,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, {data}) => state.merge({data})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOKEN_DATA]: request,
})
