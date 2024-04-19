import { actionTypes } from '../actions/actionTypes'

export const initState = {
  isLoading: false,
  activeContainer: 'entry',
  name: '',
  testID: '',
  countdownTimer: '30:00'
}

const set = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }

    case actionTypes.SET_ACTIVE_CONTAINER:
      return {
        ...state,
        activeContainer: action.data
      }

    case actionTypes.SET_NAME:
      return {
        ...state,
        name: action.data
      }

    case actionTypes.SET_TEST_ID:
      return {
        ...state,
        testID: action.data
      }

    case actionTypes.SET_COUNT_DOWN_TIMER:
      return {
        ...state,
        countdownTimer: action.data
      }

    default:
      return state
  }
}

export default set
