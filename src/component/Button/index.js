import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {buttonText, emitEvent} = props;
  const submitEvent = () => {
    if (emitEvent) emitEvent();
  }
  return (
    <button data-test='buttonComponent' onClick={() => submitEvent()}>
      {buttonText}
    </button>
  )
}
Button.propType = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}
export default Button;
