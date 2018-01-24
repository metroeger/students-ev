import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import GreenButton from '../components/GreenButton'
import RedButton from '../components/RedButton'
import YellowButton from '../components/YellowButton'


class Student extends PureComponent {
  static propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,

}
  render() {
    const { name, photo, color } = this.props

    return(
      <article className="student">
        <h1>{ name }</h1>
        <div>
          <p>{ photo }</p>
          <p>{ color }</p>
        </div>
        <footer>
          <GreenButton
            onChange={this.toggleRate}
            //rated={rated}
            />
          <YellowButton
            onChange={this.toggleRate}
            />
          <RedButton
            onChange={this.toggleRate}
            />
        </footer>
      </article>
    )
  }
}

  export default Student
