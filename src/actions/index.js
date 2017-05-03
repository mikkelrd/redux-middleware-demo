export const REQUEST_LIST = 'REQUEST_LIST';

export const fetchList = (listName) => ({
	type: REQUEST_LIST,
	payload: fetch(`https://swapi.co/api/${listName}`)
		.then(response => response.json())
		.then(json => json.results)
});
