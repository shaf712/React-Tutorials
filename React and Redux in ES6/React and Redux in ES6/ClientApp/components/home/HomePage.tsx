import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>Using React and Redux in ES6</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )
    }

}

export default HomePage;