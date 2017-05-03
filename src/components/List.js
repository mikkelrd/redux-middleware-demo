import React from 'react';
import { connect } from 'react-redux';


const List = ({ list, loading }) => {
	return loading
		?
			<div className="spinner"></div>
		:
			<ul className="list">
				{list.map((item, i) => (<li key={i}>{item.name}</li>))}
			</ul>
}

export default connect(({list, loading}) => ({list, loading}))(List);
