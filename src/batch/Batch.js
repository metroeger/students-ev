import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Student, {studentShape} from './Student'
import { connect } from 'react-redux'
import StudentEditor from '../components/StudentEditor'

//import NextButton from './components/Nextbutton'


class Batch extends PureComponent {
  static propTypes = {
   students: PropTypes.arrayOf(studentShape).isRequired,
   //calculated: PropTypes.bool.isRequired,

 }

  renderStudent = (student, index) => {
      return <Student key = {index} {...student} />
    }

    /*
    classNames() {
      const { calculated } = this.props
      let classes = 'GreenButton'

      if (calculated) { classes += ' calculated' }

      return classes
    }

    randomize() {
      this.props.onChange()
    }
    */


  render() {
    return(
      <div className="students wrapper">
        <header>
          <Title content="BATCH #13" />
          <StudentEditor />
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
