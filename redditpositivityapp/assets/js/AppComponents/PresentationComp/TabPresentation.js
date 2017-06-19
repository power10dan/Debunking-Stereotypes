import React from 'react';
import {Tab, Tabs} from  'react-toolbox';
import theme from '../../../ThemeFile/themeStyle.css';

class TabularComp extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			index: 0
		};

		this.handleTabs = this.handleTabChange.bind(this);
	}

	handleTabChange (index){
		this.setState({index});
		this.props.onClick(index);
	}

	render(){
		return(
			<Tabs 
				className={theme.appBarTabs}
		  		index={this.state.index} 
		  		onChange={this.handleTabs} >

		  		<Tab className = {theme.appBarSingTab} label="Ask Perescope" />   		
				<Tab className = {theme.appBarSingTab} label="About Periscope" />		
				<Tab className = {theme.appBarSingTab} label="Hot Telescoped Stereotypes" />

     		</Tabs>
		);
	}
}

export default TabularComp;