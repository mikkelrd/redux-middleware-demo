import { REQUEST_LIST } from '../actions';

const initialState = {
	list: [],
	loading: false,
};

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case `${REQUEST_LIST}_PENDING`:
			return {...state, list: [], loading: true};
		case `${REQUEST_LIST}_FULFILLED`:
			return {...state, list: payload, loading: false};
		default:
			return state;
	}
}
