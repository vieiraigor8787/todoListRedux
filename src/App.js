import React, { Component } from 'react'
import { Provider } from 'react-redux';

import store from './store';
import TodoList from './TodoList';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
        <Counter />
      </Provider>
    )
  }
}

export default App

