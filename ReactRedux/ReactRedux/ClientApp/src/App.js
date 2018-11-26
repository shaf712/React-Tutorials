import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  TODO  from './components/TODO';
import store from './components/store/configureStore'; 
import { Provider } from 'react-redux';  
import ManageCourses from './components/ManageCourses';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Provider store={store}>
      <Layout>
        <Route exact path='/' component={TODO} />
        <Route path='/manage-courses' component={ManageCourses} />
      </Layout>
      </Provider>
    );
  }
}
