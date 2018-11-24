import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export class AboutPage extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div>
                <h1>This is the About page </h1>
            </div>
        )
    }

}

export default AboutPage;