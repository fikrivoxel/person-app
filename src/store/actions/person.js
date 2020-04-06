export const ADD_PERSON_LIST = 'ADD_PERSON_LIST'
export const UPDATE_PERSON_LIST = 'UPDATE_PERSON_LIST'
export const REMOVE_PERSON_LIST = 'REMOVE_PERSON_LIST'
export const SET_PERSON_DATA = 'SET_PERSON_DATA'
export const REMOVE_PERSON_DATA = 'REMOVE_PERSON_DATA'

export const addPersonList = function (payload) {
  return {
    type: ADD_PERSON_LIST,
    payload
  }
}
export const updatePersonList = function (payload) {
  return {
    type: UPDATE_PERSON_LIST,
    payload
  }
}
export const removePersonList = function (payload) {
  return {
    type: REMOVE_PERSON_LIST,
    payload
  }
}
export const setPersonData = function (payload) {
  return {
    type: SET_PERSON_DATA,
    payload
  }
}
export const removePersonData = function () {
  return {
    type: REMOVE_PERSON_DATA
  }
}

export const findPerson = data => (dispatch, getState) => {
  let {person: {list}} = getState()
  let find = list.find(l => l.id === data.id)
  dispatch(setPersonData(find))
  return Promise.resolve()
}
