import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentCards from './CommentCards.jsx';

ReactDOM.render(
	<CommentCards prop="http://127.0.0.1:8000/helpWomenEngineerApp/" />,
	document.getElementById('root')
);