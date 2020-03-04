import Api from '../Services/Api'

export const headerJSON = obj => {
  Api.create().typeJSON()
  return obj
}

export const getApiData = response => {
  return response ? response.data : null
}

export const getApiCode = response => {
  return response.status
}
