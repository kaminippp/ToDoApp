/**
 * Project : SimpliClaim
 * Page : Navigation page having navigations throughout the app
 **/

import React, {Component} from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {LandingScreenComponent} from "./LandingScreenComponent";
import {TaskListComponent} from "./TaskListComponent";
import {FlipGestureComponent} from './FlipGestureComponent';

let screensObj = {
    FlipGestureComponent: {screen: FlipGestureComponent},
    TaskList: {screen: TaskListComponent}
};
const StartScreen = createStackNavigator(screensObj,
    {
        headerMode: 'screen',
        cardStyle: {backgroundColor: '#black'},
    });
const StartContainer = createAppContainer(StartScreen);

export class StackNavigatorComponent extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        console.disableYellowBox = true;
        return (
            <StartContainer
                screenProps={{
                    name: "SimpliClaim",
                }}
            />
        );
    }
}
