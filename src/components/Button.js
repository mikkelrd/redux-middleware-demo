import React from 'react';
import { connect } from 'react-redux';
import { fetchList, updateList } from '../actions';


const Button = ({ listName, dispatch }) => {

	const fetchListHandler = (listName) => {
		dispatch(fetchList());
		fetch(`https://swapi.co/api/${listName}`)
			.then(response => response.json())
			.then(json => dispatch(updateList(json.results)));
	};

	return (
		<button onClick={() => fetchListHandler(listName)}>
			{listName}
		</button>
	);
}

export default connect()(Button);
