import React from 'react';

import Content from './Content'
import './App.css';

import UserContextProvider from './context/userContext'
import ErrorContextProvider from './context/errorContext'
import ItemContextProvider from './context/itemContext'

const App = (props) => {
    return (
        <ErrorContextProvider>
            <ItemContextProvider>
                <UserContextProvider>
                    <Content/>
                </UserContextProvider>
            </ItemContextProvider>
        </ErrorContextProvider>
    );
}

export default App;
