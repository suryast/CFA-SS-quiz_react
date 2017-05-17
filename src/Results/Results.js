import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Results.css';
import { CardTitle, CardText} from 'material-ui/Card';
import {
    CloseButton
} from 'react-svg-buttons'

class Results extends Component {
  render() {
    return (
      <div>
        <CardTitle title={this.props.end_message} />
        <CardTitle title="Your score was:" subtitle={this.props.score}/>
        <CloseButton label="Retry" onClick={this.props.handleReset} />
        <CardText>Click Reset Button to Retry</CardText>
      </div>
    )
  }
};

Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.isRequired,
  restart: PropTypes.func.isRequired
};


Results.defaultProps = {
  end_message: 'CONGRATS!!'
}

export default Results;
