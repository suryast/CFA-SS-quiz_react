import React from 'react';
import PropTypes from 'prop-types';

//stateless component
const ProgressBar = ({current_step, question_length}) => {
    return (
      <p>{current_step}/{question_length}</p>
    )
};

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired
};

export default ProgressBar;
