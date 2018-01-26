import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import createStudent from '../actions/students'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
//import './StudentEditor.css'


class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, photo, color, rated } = props

    this.state = {
      name,
      photo,
      color,
      rated
    }
  }

  updateName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }


  setColor(event) {
    this.setState({
      color: event.target.value === 'green',
      color: event.target.value === 'yellow',
      color: event.target.value === 'yellow'
    })
  }

  saveStudent() {
    const {
      name,
      photo,
      color,
      rated,
    } = this.state

    const student = {
      name,
      photo,
      rated: false,
      color: ""

    }

    console.log(student)
    this.props.createStudent(student)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="student name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyDown={this.updateName.bind(this)} />

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyDown={this.updatePhoto.bind(this)} />



        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect (null, {createStudent})(StudentEditor)
