import {Component} from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  static propTypes = {
    quizResult: PropTypes.string.isRequired,
  };

    render(){
	return (
		<div className="result">
		You prefer <strong>{this.props.quizResult}</strong>!
	    </div>
	);
    };
}

export default Result;
