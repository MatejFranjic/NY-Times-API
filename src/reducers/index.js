// Here we combine reducers so our state 
// can be managed through redux
/* redux functions we need */
import { combineReducers } from 'redux';
/*-------Imported reducers we want to combine--------*/
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
	posts: PostReducer
});

export default rootReducer;
