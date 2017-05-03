import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../actions';


const Button = ({ fetcher, listName }) => (
	<button onClick={() => fetcher(listName)}>
		load {listName}
	</button>
);

export default connect(null, dispatch => ({
	fetcher: (listName) => dispatch(fetchList(listName))
}))(Button);
