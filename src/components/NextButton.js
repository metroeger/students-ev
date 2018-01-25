import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const styles = {
  button: {
    background: "grey"
}};

class NextButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }


  randomize() {
    this.props.onChange()
  }

  render() {
    const {rated} = this.props
    return (
      //<p className={ this.greenNames() }>
        <button
        style={styles.button}
        onClick={ this.randomize.bind(this) }>
          { rated ? "GREEN" : 'RATE ME' }
        </button>
      </p>
    )
  }
}

export default GreenButton
