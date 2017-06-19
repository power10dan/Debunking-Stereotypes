import React, {Components} from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import theme from '../../ThemeFile/themeStyle.css';
import {Tab, Tabs} from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import TabularComp  from './TabularComponent.js';


const TelescopeIcon  = () => (
	<img src="https://png.icons8.com/periscope/ios7/50" title="Periscope" width="35" height="35" /> 
);

export const TopAppBar = (props) => (
  <AppBar leftIcon = {<TelescopeIcon />} title="Periscope" theme={theme} flat >
  		<TabularComp />
  </AppBar>
);
 

