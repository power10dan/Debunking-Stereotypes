import React from 'react';
import theme from '../../ThemeFile/themeStyle.css';
import {Tab, Tabs} from  'react-toolbox';

const SideBarTemplateAsk = () => (
	<div> 
	  	 <div id="titleAsk" className = {theme.lineDivNotClicked} >
	  	 	<h2 className={theme.menuHeader} > Trending </h2>
	  	 </div>

		 <div id="omgButton" className = {theme.lineDivClicked} >
			    <img className = {theme.sideImage} src="https://png.icons8.com/siren/dusk/64" title="Siren" width="60" height="64" />
			    <h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> OMG Stereotypes </a> </h1>
		 </div>
		  <div id="happiestButton" className = {theme.lineDivNotClicked} >
			    <img className = {theme.sideImage} src="https://png.icons8.com/happy/dusk/64" title="Happy" width="55" height="64" />                        
			    <h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Happiest Thoughts </a> </h1>
		 </div>
		  <div id="happiestButton" className = {theme.lineDivNotClicked} >
			   <img className = {theme.sideImage} src="https://png.icons8.com/reviewer-male/office/60" title="Reviewer Male" width="55" height="64" />                        
			    <h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Analyze Negativity </a> </h1>
		 </div>
		 <div id="title" className = {theme.lineDivNotClicked} >
	  	 	<h2 className={theme.menuHeader} > Personal </h2>
	  	 </div>
	  	  <div id="happiestButton" className = {theme.lineDivNotClicked} >
			   <img className = {theme.sideImage} src="https://png.icons8.com/add-to-favorites/office/60" title="Add to Favorites" width="60" height="60" />                        
			    <h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Starred Favorites </a> </h1>
		 </div>
		  <div id="title" className = {theme.lineDivNotClicked} >
	  	 	<h2 className={theme.menuHeader} > In the news </h2>
	  	 </div>

		  <div id="happiestButton" className = {theme.lineDivNotClicked} >
			   <img className = {theme.sideImage} src="https://png.icons8.com/news/dusk/64" title="News" width="64" height="64" />                        
			    <h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Stereotypes feeds </a> </h1>
		 </div>
	</div>

)

const SideBarTemplateAbout = () =>(
	<div> 
		<div id="titleAbout" className={theme.lineDivNotClicked} >
			<h2 className={theme.menuHeader}> About Periscope </h2>
		</div>

		<div id="whatWeStand" className= {theme.lineDivClicked} >
			 <h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> What we stand for </a> </h1>
		</div>

		<div id="whyPeriscope" className = {theme.lineDivNotClicked} >
			<h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Why Periscope? </a> </h1>
		</div>

		<div id="FeaturesPeriscope" className={theme.lineDivNotClicked} >
			<h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Features of Periscope </a> </h1>
		</div>

	</div>
)

const SideBarTemplateHotTelTopic = () => (
	<div>
		<div id="titleDaily" className={theme.lineDivNotClicked} >
			<h2 className={theme.menuHeader}> Daily Stereotypes </h2>
		</div>

		<div id="dailyBillboard" className={theme.lineDivClicked} >
			<img className = {theme.sideImage} src="https://png.icons8.com/billboard/dusk/64" title="Billboard"  width="64" height="64" />                        
			<h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Daily Billboard </a> </h1>
		</div>

		<div id="dailyBillboard" className={theme.lineDivNotClicked} >
			<img className = {theme.sideImage} src="https://png.icons8.com/stocks/color/96" title="Stocks" width="64" height="64" />                                                
			<h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Trending </a> </h1>
		</div>

		<div id="dailyBillboard" className={theme.lineDivNotClicked} >
			<img className = {theme.sideImage}  src="https://png.icons8.com/conflict-filled/ios7/75" title="Conflict Filled" width="64" height="64" />                        
			<h1 className = {theme.NameSideNav}> <a className={theme.linkNotLikeLink} href="#"> Daily Counters </a> </h1>
		</div>
	</div>
)

export default class SideNavComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tabPos: props.tabIndex
		}
	}

	// handle how sidenav will look
	// when  different tabs are clicked
	handleTabChangeContent(){
		if(this.state.tabPos === 0){
			return <SideBarTemplateAsk />
		}

		if(this.state.tabPos === 1){
			return <SideBarTemplateAbout />
		}

		if(this.state.tabPos === 2){
			return <SideBarTemplateHotTelTopic />
		}
	}

	render(){
		let sideBarConfig = null;
		
		if(this.state.tabPos === 0){
			sideBarConfig = <SideBarTemplateAsk />
		}

		return(
			<div id="sideBar" className= {theme.sidebar}>
				{sideBarConfig}
			</div>
  			
		);
	}
}


//export const MySideNavBar = () =>(
//  <div id="sideBar" className= {theme.sidebar}>
//		<SideBarTemplateHotTelTopic />
//   </div>
//)*/