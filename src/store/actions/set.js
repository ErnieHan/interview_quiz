import { actionTypes } from './actionTypes'

export const setIsLoading = bool => {
  return { type: actionTypes.SET_IS_LOADING, bool }
}

export const setActiveContainer = data => {
  return { type: actionTypes.SET_ACTIVE_CONTAINER, data }
}

export const setName = data => {
  return { type: actionTypes.SET_NAME, data }
}

export const setTestID = data => {
  return { type: actionTypes.SET_TEST_ID, data }
}

export const setCountDownTimer = data => {
  return { type: actionTypes.SET_COUNT_DOWN_TIMER, data }
}
