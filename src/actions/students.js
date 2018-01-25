export const CREATE_STUDENT = 'CREATE_STUDENT'
export const TOGGLE_RATE_STUDENT = 'TOGGLE_RATE_STUDENT'
export const WHO_IS_NEXT = 'WHO_IS_NEXT'

export const toggleRateStudent = (studentId) => {
  return {
    type: TOGGLE_RATE_STUDENT,
    payload: studentId
  }
}

export const whoIsNext = (batchId) => {
  return {
    type: WHO_IS_NEXT,
    payload: batchId
  }
}
