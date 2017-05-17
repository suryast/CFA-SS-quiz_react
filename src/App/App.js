import React, {Component} from 'react';
import './App.css';
import Question from '../Questions/Question';
// import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import CardExampleWithAvatar from './CardExampleWithAvatar';
import Progress from 'react-progressbar';

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';

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
    this.resetProgress = this.resetProgress.bind(this);
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
        progress: this.state.progress + 1,
      })
    }
  };

  resetProgress(){
    this.setState({
      progress: 0,
      selected: 'None yet!',
      score: 0
    })
  };

  updateSelected(answer) {
    this.setState({selected: answer})
  };

  render() {
      let quizProgress = this.state.progress / this.quiz_data.length * 100;

      return (
        <div className="App">
        <MuiThemeProvider>
          <Card>
            <CardMedia
              overlay={<CardTitle title="Quiz App"/>}
            >
              <img src="http://res.cloudinary.com/suryast/image/upload/v1494158351/captain_s4qonc.jpg" />
            </CardMedia>
          <CardText>
            {this.state.progress < this.quiz_data.length ? (
              <div>
                <Question current_question={this.quiz_data[this.state.progress].question} />
                <Progress
                  style={{
                    backgroundColor: '#FF980grey',
                  }}
                  completed={quizProgress} />
                <MultiChoice
                  answers={this.quiz_data[this.state.progress].possible_answers}
                  updateSelected={this.updateSelected}
                  handleSubmit={this.submitAnswer}
                  selectedAnswer={this.state.selected} />
              </div>
            )
            : (
              <Results handleReset={this.resetProgress} score={this.state.score} end_message="Congratulations, you have finished!" />
             )}
          </CardText>
         </Card>
        </MuiThemeProvider>
      </div>
      );
    }
}

export default App;

// <MuiThemeProvider>
//   <LinearProgressExampleDeterminate />
// </MuiThemeProvider>
// The other option is to create another function to do the calculation
