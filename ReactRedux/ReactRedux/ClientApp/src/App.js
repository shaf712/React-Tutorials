import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import  TODO  from './components/TODO';
import store from './components/store/configureStore'; 
import { Provider } from 'react-redux';  

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Provider store={store}>
      <Layout>
        <TODO />
      </Layout>
      </Provider>
    );
  }
}
