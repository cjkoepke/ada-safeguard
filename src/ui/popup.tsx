import * as React from "react"
import * as ReactDOM from "react-dom"
import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database';

import { config } from '../firebase/config';

const Welcome = () => (
    <FirebaseDatabaseNode path="/scamList/domains" orderByKey>
        {({ value }) => {
            return value
                ? <p>Loading...</p>
                : <ul>{value.map((domain: string) => <li>{domain}</li>)}</ul>
        }}
    </FirebaseDatabaseNode>
);

ReactDOM.render(
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <Welcome />
    </FirebaseDatabaseProvider>,
    document.getElementById('root')
)