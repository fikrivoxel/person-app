import {
  ADD_PERSON_LIST,
  UPDATE_PERSON_LIST,
  REMOVE_PERSON_LIST,
  SET_PERSON_DATA,
  REMOVE_PERSON_DATA
} from '../../actions/person'

const initState = {
  list: [],
  data: {}
}

const addPersonList = function (state, payload) {
  let list = [...state.list]
  if (list.length === 0) return state
  list.push(payload)
  return {
    ...state,
    list
  }
}
const updatePersonList = function (state, payload) {
  let list = [...state.list]
  let idx = list.findIndex(st => st.id === payload.id)
  if (idx === -1) return state
  list.splice(idx, 1, payload)
  return {
    ...state,
    list
  }
}
const removePersonList = function (state, payload) {
  let list = [...state.list]
  let idx = list.findIndex(st => st.id === payload.id)
  if (idx === -1) return state
  list.splice(idx, 1)
  return {
    ...state,
    list
  }
}
const setPersonData = function (state, payload) {
  return {
    ...state,
    data: payload
  }
}
const removePersonData = function (state) {
  return {
    ...state,
    data: {}
  }
}

export default function (state = initState, actions) {
  let {payload, type} = actions
  switch (type) {
    case ADD_PERSON_LIST:
      return addPersonList(state, payload)
    case UPDATE_PERSON_LIST:
      return updatePersonList(state, payload)
    case REMOVE_PERSON_LIST:
      return removePersonList(state, payload)
    case SET_PERSON_DATA:
      return setPersonData(state, payload)
    case REMOVE_PERSON_DATA:
      return removePersonData(state)
    default:
      return state
  }
}
