import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const styles = {
  button: {
    background: "red"
}};

class RedButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    rated: PropTypes.bool
  }

  classNames() {
    const { rated } = this.props
    let classes = 'RedButton'

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
        style={styles.button}>
          RED
        </button>
      </p>
    )
  }
}

export default RedButton
