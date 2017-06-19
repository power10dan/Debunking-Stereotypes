import combineReducers from 'redux';
import {TAB_MOVE, TAB_INIT} from '../Actions/ActionCreator.js';

const initialTabState= {
	tabAction: ActionCreator.TAB_INIT;
	tabPos: 0
};

const toggleTab = (state=initialTabState, action) => {
	switch(action.type){
		case TAB_MOVE:
			return Object.assign({}, state, {
				tabPos: action.tabPos
			});

		default:
			return state
	}
}

const tabToggle = combineReducers({
	toggleTab
});

export default tabToggle;