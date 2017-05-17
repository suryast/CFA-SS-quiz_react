import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MultiChoice.css';
import {CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
    HoverMorphIcon
} from 'react-svg-buttons'


class MultiChoice extends Component {
  render() {
    return (
      <CardActions>
        {this.props.answers.map((answer, i) => <FlatButton style={{
          backgroundColor: '#ffd699'
        }}
          label={answer} key={i} onClick={() => this.props.updateSelected(answer)}/>)}
        <br/>
        <CardTitle title="You have selected:" subtitle={this.props.selectedAnswer} />
        <HoverMorphIcon baseType="plus" hoverType="check" onClick={this.props.handleSubmit}/>
        <CardText>Click Add Button to Submit Answer</CardText>
      </CardActions>
    )
  }
};

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired
};

MultiChoice.defaultProps = {
  answers: 'N/A'
}

export default MultiChoice;
