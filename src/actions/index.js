export const UPDATE_LIST = 'UPDATE_LIST';
export const REQUEST_LIST = 'REQUEST_LIST';

export const updateList = (data) => ({type: UPDATE_LIST, data});

export const fetchList = (listName) => {
	return dispatch => {
		dispatch({type: REQUEST_LIST});
		fetch(`https://swapi.co/api/${listName}`)
			.then(response => response.json())
			.then(json => dispatch(updateList(json.results)));
	}
};
