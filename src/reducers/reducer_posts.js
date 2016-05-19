//POSTS REDUCER MADE, exporting data that action gets
import { FETCH_POSTS } from '../actions/index';

export default function(state = null , action){

	switch(action.type){
		case FETCH_POSTS:
			console.log('entered action, payload is:', action.payload.data);
			return state = { posts: action.payload.data};
			//console.log('Ovo je stanje state-a prije returnanja payloada',state);
	}
	return state;
}