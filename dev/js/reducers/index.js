import {combineReducers} from 'redux';
import allNotes from './notes-reducer';


const allReducer = combineReducers({
	dNotes: allNotes,
});

export default allReducer;