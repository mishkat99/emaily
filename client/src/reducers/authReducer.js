import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false; //action.payload will return object or an empty string. An empty string is falsy
		default:
			return state;
	}
};