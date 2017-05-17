import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

class Question extends Component{
  render(){
    return (
      <div>
        <h3>{this.props.current_question}</h3>
      </div>
    )
  }
};

Question.propTypes = {
  current_question: PropTypes.string.isRequired
};

export default Question;
