import {Component} from 'react';
import PropTypes from 'prop-types';
import AnswerOption from './AnswerOption';
import QuestionCount from './QuestionCount';
import Question from './Question';


    function renderAnswerOptions(key , props) {
	return (
	     <AnswerOption
         key={key.content}
         answerContent={key.content}
         answerType={key.type}
         answer={props.answer}
         questionId={props.questionId}
         onAnswerSelected={props.onAnswerSelected}
	     />
	);
  }

class  Quiz extends Component {
  static propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  render() {
	return (
		<div className="quiz">
		<QuestionCount
            counter={this.props.questionId}
            total={this.props.questionTotal}
		/>
		<Question content={this.props.question} />
		<ul className="answerOptions">
		{this.props.answerOptions.map( (x)=>renderAnswerOptions(x,this.props))}
            </ul>
		</div>
	);
  };
}

export default Quiz;
