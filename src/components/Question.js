import {Component} from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    
    static propTypes = {
	content: PropTypes.string.isRequired
    };
    
    render () {
	return (
		<h2 className="question">{this.props.content}</h2>
	);
    }
}

export default Question;
