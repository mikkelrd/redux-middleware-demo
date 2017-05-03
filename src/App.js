import React from 'react';
import { Button, List } from './components';

const App = () => {
    return (
        <div className="App">
            <h2>react + redux + redux-promise</h2>
            <Button listName="people" />
            <Button listName="planets" />
            <List />
        </div>
    );
}

export default App;
