import React, {Component} from 'react';
import CardFlip from 'react-native-card-flip';
// import { View, Button, Text ,TouchableOpacity} from 'react-native';
import {LandingScreenComponent} from './LandingScreenComponent';
import {TaskListComponent} from './TaskListComponent';

export class FlipGestureComponent extends Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
    }

    render() {
        return (
            <CardFlip style={{flex: 1, backgroundColor: "black"}} ref={(card) => this.card = card}>
                <LandingScreenComponent navigation={this.props.navigation}
                    // ServiceCall={ServiceCall}
                                        onPress={() => this.card.flip()}/>
                <TaskListComponent navigation={this.props.navigation}
                    // ServiceCall={ServiceCall}
                                   onPress={() => this.card.flip()}/>
                {/*<TouchableOpacity style={{flex:1,backgroundColor:'red'}} onPress={() => this.card.flip()} ><Text>CD</Text></TouchableOpacity>*/}
            </CardFlip>
        );

    }
}
