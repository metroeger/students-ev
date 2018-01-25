import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Student, {studentShape} from './Student'
import { connect } from 'react-redux'


class Batch extends PureComponent {
  static propTypes = {
   students: PropTypes.arrayOf(studentShape).isRequired,
 }

  renderStudent = (student, index) => {
      return <Student key = {index} {...student} />
    }

  render() {
    return(
      <div className="students wrapper">
        <header>
          <Title content="BATCH #13" />
        </header>
        <main>
          { this.props.students.map(this.renderStudent) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({students}) => ({students})

export default connect (mapStateToProps)(Batch)
