export const REQUEST_LIST = 'REQUEST_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';

export const fetchList = () => ({type: REQUEST_LIST});
export const updateList = (data) => ({type: UPDATE_LIST, data});
