import ApiClient from '../api/client'
import {loading, loadError} from './loading'

export const CREATE_STUDENT = 'CREATE_STUDENT'
export const TOGGLE_RATE_STUDENT = 'TOGGLE_RATE_STUDENT'
export const WHO_IS_NEXT = 'WHO_IS_NEXT'
export const FETCHED_BATCH = 'FETCHED_BATCH'
export const RED_RATE_STUDENT = 'RED_RATE_STUDENT'
export const YELLOW_RATE_STUDENT = "YELLOW_RATE_STUDENT"

const api = new ApiClient()

export const fetchBatch = () => {
  return dispatch => {
    const path = '/batch'
    dispatch(loading(path, true))

    api.get(path)
      .then(res => {
        dispatch(loading(path, false))
        dispatch({ type: FETCHED_BATCH, payload: res.body })
      })
      .catch(err => {
        dispatch(loading(path, false))
        dispatch(loadError(err))
      })
  }
}

export const toggleRateStudent = (studentId) => {
  return {
    type: TOGGLE_RATE_STUDENT,
    payload: studentId
  }
}

export default (newStudent) => {
  return {
    type: CREATE_STUDENT,
    payload: newStudent
  }
}

export const yellowRateStudent = (studentId) => {
  return {
    type: YELLOW_RATE_STUDENT,
    payload: studentId
  }
}

export const redRateStudent = (studentId) => {
  return {
    type: RED_RATE_STUDENT,
    payload: studentId
  }
}


export const whoIsNext = (batchId) => {
  return {
    type: WHO_IS_NEXT,
    payload: batchId
  }
}
