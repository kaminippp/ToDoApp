import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import {AlalogWatchComponent} from "./commonComponents/AlalogWatchComponent";
import {HeaderBack} from "./commonComponents/UIComponents";
import {Theme} from '../common/theme';
import {getImageUrls} from '../common/ImagePaths';

type Props = {};


export class TaskListComponent extends Component<Props> {
    static navigationOptions = {header: null}

    constructor(props) {
        super(props);
        this.state = {
            greetingText: "Good morning,",
            name: 'Kamini Pagare'
        }
        this.extractGreetingText = this.extractGreetingText.bind(this);
        this.navigateFunc = this.navigateFunc.bind(this);
    }

    componentDidMount(): void {
        this.extractGreetingText();
    }

    extractGreetingText() {
        let today = new Date();
        let curHr = today.getHours();
        let greetingText;
        if (curHr < 12) {
            greetingText = 'Good morning,';
        } else if (curHr < 18) {
            greetingText = 'Good afternoon,';
        } else {
            greetingText = 'Good evening,';
        }

        this.setState({
            greetingText: greetingText
        })
    }

    navigateFunc() {
        this.props.onPress()
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderBack data={{
                    onPress: this.navigateFunc
                }}/>
                <View
                    style={[styles.cardContainer, {backgroundColor: Theme.themeWhite}]}>

                    <View style={styles.cardHeaderContainer}>
                        <Text style={styles.taskHeading}>
                            Daily Task
                        </Text>
                        <Text
                            style={[styles.taskHeading, {color: Theme.themeBlue}]}>+</Text>
                    </View>

                    <View style={[styles.cardStyle, {opacity: 0.4}]}>
                        < Image source={getImageUrls.BigChecked}
                                style={styles.radio}/>
                        <Text numberOfLines={1}
                              style={[styles.strikedText, {
                                  fontSize: 25
                              }]}>
                            WakeUp at <Text
                            style={[{color: Theme.themeBlue}]}> 8:00am</Text>
                        </Text>
                    </View>

                    <View style={[styles.cardStyle, {opacity: 0.4}]}>
                        <Image source={getImageUrls.BigChecked}
                               style={styles.radio}/>
                        <Text numberOfLines={1}
                              style={[styles.strikedText, {
                                  fontSize: 25
                              }]}>
                            Breakfast at <Text
                            style={[{color: Theme.themeBlue}]}> 9:00am</Text>
                        </Text>
                    </View>

                    <View style={styles.cardStyle}>
                        <Image source={getImageUrls.BigUnchecked}
                               style={styles.radio}/>
                        <Text numberOfLines={4}
                              style={[{color: Theme.themeHeading}, {fontSize: 25}]}>
                            Read story at <Text
                            style={[{color: Theme.themeBlue}]}> 9:30am</Text>
                            <Text style={{fontSize: 17, marginTop: 13}}>
                                {"\nRead the book that you took\nit last yesterday at the bar from\nRichard Brandson"}
                            </Text>
                        </Text>

                    </View>

                    <View style={styles.cardStyle}>
                        <Image source={getImageUrls.BigUnchecked}
                               style={styles.radio}/>
                        <Text numberOfLines={2}
                              style={[{color: Theme.themeHeading}, {fontSize: 25}]}>
                            {"Work on project from\n9:30am to 12:00pm"}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingRight: 25,
        // paddingLeft: 25,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f4f6',
        // borderTopEndRadius:30,
        // backgroundColor: 'red'
        flex: 1,
        height: '100%'
    },
    cardHeaderContainer: {
        justifyContent: "space-between",
        width: '100%',
        flexDirection: 'row'
    },
    subHeading1: {
        fontSize: 27, color: Theme.themeSubHeading,
        fontFamily: "Poppins-Light",
    },
    subHeading2: {
        fontSize: 27, color: Theme.themeSubHeading,
        fontFamily: "Poppins-SemiBold",
    },
    addCardContainer: {
        backgroundColor: Theme.themeRed,
        height: 25,
        width: 25,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addCardPlus: {
        color: Theme.themeWhite,
        fontSize: 20
    },
    cardContainer: {
        marginTop: 10,
        width: '100%',
        flex: 1,
        paddingLeft: 40,
        borderTopEndRadius: 40,
        // elevation: 20,
        // shadowOffset: {width: 210, height: -10},
        // borderColor: Theme.themeBlue,
        // marginBottom: 50,
        padding: 25
    },
    taskHeading: {
        color: Theme.themeSubHeading,
        fontSize: 37,
        fontFamily: "Poppins-SemiBold"
    },
    cardStyle: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 20,
    }, radio: {
        marginTop: 3,
        height: 30,
        width: 30,
        marginRight: 30,
        // marginBottom:-10
    },
    strikedText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: Theme.themeHeading,
    }
});
