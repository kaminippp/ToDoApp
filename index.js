/**
 * @format
 */

import React, {Component} from "react";
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {StackNavigatorComponent} from "./Components/StackNavigatorComponent";
export default class ToDoApp extends Component {
    render() {
        return (<StackNavigatorComponent />
        );
    }
}
AppRegistry.registerComponent(appName, () => ToDoApp);
