import React, {Component} from 'react';
import {Button} from 'react-toolbox/lib/button';
import {TopAppBar} from './AppComponents/TopAppBar.jsx';
import SideNavigationPanel from './AppComponents/SideNavigationPanel.js'

class CommentCards extends Component{
	constructor(props){
		super(props);
		this.state = {dataFromRes:""};
		this.getDataFromDjango(props.prop);
	}

	componentDidMount(){
		
	}
	// process a list of promises
	getDataFromDjango(url){
		var linkToJson = url;
		$.ajax({
			url: linkToJson,
			datatype: 'json',
			cache: false,
			success: function(data){
				for(var i = 0; i < data.length; ++i){
					let idNum = data[i].id;
					let messageReddit = data[i].message;
					let subReddits = data[i].subReddit;
					var newState = {id: idNum, message: messageReddit, sub: subReddits};
					this.setState({dataFromRes: newState});
				}

			}.bind(this)
		});
	}

	render(){
		if(this.state.dataFromRes){
			var id = this.state.dataFromRes.id;
			var message = this.state.dataFromRes.message
		}

		return (
			<div>
				<TopAppBar />	
				<SideNavigationPanel />
			</div>
		)
	}
}

export default CommentCards;