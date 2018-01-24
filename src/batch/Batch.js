import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Student from './Student'


class Batch extends PureComponent {
  renderStudent(student, index) {
      return <Student key={index} {...student} />
    }
  render() {
    return(
      <div className="students wrapper">
        <header>
          <Title content="Students" />
        </header>
        <main>
          { this.props.students.map(this.renderStudent) }
        </main>
      </div>
    )
  }
}


export default Batch
