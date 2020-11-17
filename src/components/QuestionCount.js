import {Component} from 'react';
import PropTypes from 'prop-types';

class  QuestionCount extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  };
    
    render(){
	return (
		<div className="questionCount">
		Question <span>{this.props.counter}</span> of <span>{this.props.total}</span>
		</div>
	);
    };
}

export default QuestionCount;
