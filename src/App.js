import React, {Component} from 'react';
import './App.css';
import Question from './Question';
import ProgressBar from './ProgressBar';
import MultiChoice from './MultiChoice';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0
    };
    this.quiz_data = [
      {
        question: 'What is the meaning of life?',
        correct: '42',
        possible_answers: ['Love', 'Money', 'JavaScript', '42']
      }, {
        question: 'Do you drink coffee or tea?',
        correct: 'Coffee',
        possible_answers: ['Tea', 'Coffee', 'Wine', 'Chocolate']
      }
    ]
    this.submitAnswer = this.submitAnswer.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'None yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1
      })
    }
  };

  updateSelected(answer) {
    this.setState({selected: answer})
  };

  render() {
    return (
      <div className="App">
        <h2>Quiz App</h2>

        <Question current_question={this.quiz_data[this.state.progress].question}/>

        <ProgressBar
          current_step={this.state.progress + 1}
          question_length={this.quiz_data.length}/>

        <MultiChoice
          answers={this.quiz_data[this.state.progress].possible_answers} updateSelected={this.updateSelected}
          handleSubmit={this.submitAnswer}
          selectedAnswer={this.state.selected}/>

      </div>
    );
  }
}

export default App;
