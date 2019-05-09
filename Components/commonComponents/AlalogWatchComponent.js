import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Theme} from "../../common/theme";
import {getImageUrls} from "../../common/ImagePaths";
import AnalogClock from './AnalogClock';

export class AlalogWatchComponent extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={{marginBottom: 5}}/>
                {/*<Image source={getImageUrls.Avatar}>*/}
                <AnalogClock
                    clockBorderWidth={8}
                    colorNumber="#ffffff"
                    colorCenter="black"
                    hourHandColor={Theme.themeBlue}
                    minuteHandColor={Theme.themeBlue}
                    secondHandColor={Theme.themeSubHeading}
                    colorSecond={Theme.themeGrayHeader}
                    hour="13"
                    minutes={33}
                    clockSize={160}
                    clockCentreSize={10}
                    minuteHandLength={60}
                    hourHandLength={40}
                    secondHandLength={80}
                />
                {/*</Image>*/}
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        // backgroundImage: getImageUrls.Avatar,
        // backgroundColor: 'blue',
        height:170,
        width:280,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});