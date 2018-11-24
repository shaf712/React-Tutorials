import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import configureStore from './store/configureStore'; 
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import { Provider } from 'react-redux'; 
import { CoursesPage } from './components/course/Courses';
import { ProvidePlugin } from 'webpack';


const store = configureStore([]); 


export const routes =
    <Provider store={store}>
    <Layout>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/courses' component={CoursesPage} />
        </Layout>;
    </Provider>    
