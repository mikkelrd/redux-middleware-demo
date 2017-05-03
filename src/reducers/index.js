import { REQUEST_LIST, UPDATE_LIST } from '../actions';

const initialState = {
	list: [],
	loading: false,
};

export default (state = initialState, {type, data}) => {
	switch (type) {
		case REQUEST_LIST:
			return {...state, list: [], loading: true};
		case UPDATE_LIST:
			return {...state, list: data, loading: false};
		default:
			return state;
	}
}
