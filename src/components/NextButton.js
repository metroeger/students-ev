import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const styles = {
  button: {
    background: "grey"
}};

class NextButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    calculated: PropTypes.bool
  }

  classNames() {
    const { rated } = this.props
    let classes = 'NextButton'

    if (calculated) { classes += ' calculated' }

    return classes
  }

  randomize() {
    this.props.onChange()
  }

  render() {
    const {rated} = this.props
    return (
      <p className={ this.classNames() }>
        <button
        style={styles.button}
        onClick={ this.randomize.bind(this) }>
          { calculated ? "Tomorrow again" : 'Li' }
        </button>
      </p>
    )
  }
}

export default GreenButton
