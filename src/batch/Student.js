import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import GreenButton from '../components/GreenButton'
import RedButton from '../components/RedButton'
import YellowButton from '../components/YellowButton'
import { connect } from 'react-redux'
import { toggleRateStudent } from '../actions/students'


export const studentShape = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rated: PropTypes.bool
}

class Student extends PureComponent {
  static propTypes = {
    ...studentShape.isRequired,
    toggleRate: PropTypes.func.isRequired

}

toggleRate = () => {
  const {_id } = this.props
  this.props.toggleRateStudent(_id)

}
  render() {
    const { name, photo, color, rated } = this.props

    return(
      <article className="student">
        <h1>{ name }</h1>
        <div>
          <img src = {photo} alt="student" width={240} />
          <p>{ color }</p>
        </div>
        <footer>
          <GreenButton
            onChange={this.toggleRate}
            rated={rated}
            color = {color}
            />
          <YellowButton
            onChange={this.toggleRate}
            rated={rated}
            color = {color}
            />
          <RedButton
            onChange={this.toggleRate}
            rated={rated}
            color ={color}
            />
        </footer>
      </article>
    )
  }
}

  const mapDispatchToProps = {toggleRateStudent}

  export default connect(null, mapDispatchToProps)(Student)
