let idObj = 0;

export const TAB_MOVE = 'TAB_MOVE';
export const TAB_INIT = 'TAB_INIT';

export var tabMove = (index) => {
	return{
		id: idObj++,
		type: TAB_MOVE,
		pos: index
	}
}


     
