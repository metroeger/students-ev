import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const styles = {
  button: {
    background: "green"
}};

class GreenButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    rated: PropTypes.bool.isRequired,
  }

  classNames() {
    const { rated } = this.props
    let classes = 'rate'

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
        style={styles.button}
        onClick={ this.toggleRate.bind(this) }>
          { rated ? "GREEN" : 'RATE ME' }
        </button>
      </p>
    )
  }
}

export default GreenButton
