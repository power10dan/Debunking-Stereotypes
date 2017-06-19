import React from 'react';
import TabularComp from './PresentationComp/TabPresentation.js'

//TODO: Figure out how to communicate Tab component with SideNavigationPanel component
// Maybe Redux?

// This is our container function, 
// where all the redux magic happens
class TabContainerCompo extends React.Component{
	handleOnClick(index){
		if(index === 1){
			

			
		}
		
	}


	render() {
		return(
			<TabularComp onClick={()=>this.handleOnClick()} />
		);
	}
}

export default TabContainerCompo;