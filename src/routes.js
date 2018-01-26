import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'
import Batch from './batch/Batch'
import StudentPage from './batch/StudentPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Batch} />
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='batch/:studentId' component={StudentPage}/>
      </div>
    )
  }
}
