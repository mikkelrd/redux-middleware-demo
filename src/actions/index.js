export const UPDATE_LIST = 'UPDATE_LIST';
export const REQUEST_LIST = 'REQUEST_LIST';

export const updateList = (payload) => ({type: UPDATE_LIST, payload});

export const fetchList = (dispatch, listName) => {
	dispatch({type: REQUEST_LIST});
	fetch(`https://swapi.co/api/${listName}`)
		.then(response => response.json())
		.then(json => dispatch(updateList(json.results)));
};
