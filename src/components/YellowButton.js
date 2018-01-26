import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const styles = {
  button: {
    background: "yellow"
}};

class YellowButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    rated: PropTypes.bool
  }

  classNames() {

  const { rated } = this.props
  let classes = 'YellowButton'

  if (rated) { classes += ' rated' }

  return classes
}

toggleRate() {
  this.props.onChange()
}

render() {
  const {rated} = this.props
    return (
      <p className={ this.classNames() }>
        <button
        style={styles.button}>YELLOW
        </button>
      </p>
    )
  }
}

export default YellowButton
