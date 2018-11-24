import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import { CoursesPage } from './components/course/Courses';


export const routes = <Layout>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/courses' component={CoursesPage} />

</Layout>;
