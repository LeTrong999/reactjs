import { combineReducers } from 'redux';
import isShowForm from './isShowForm';
import sort from './sort';
import items from './items';
import search from './search';
import itemSelected from './itemSelected';
import user from './user';

const appReducers = combineReducers({
	isShowForm,
	sort,
	items,
	search,
	itemSelected,
	user
});

export default appReducers;