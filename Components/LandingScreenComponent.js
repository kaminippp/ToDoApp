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
import {Header} from "./commonComponents/UIComponents";
import {Theme} from '../common/theme';
import {getImageUrls} from '../common/ImagePaths';

type Props = {};


export class LandingScreenComponent extends Component<Props> {
    static navigationOptions = {header: null}

    constructor(props) {
        super(props);
        this.state = {
            greetingText: "Good morning,",
            name: 'Kamini Pagare'
        }
        this.extractGreetingText = this.extractGreetingText.bind(this);
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

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.container}>
                    <Header/>
                    <View style={styles.greetingContainer}>
                        <Text style={styles.greetingText}>
                            {this.state.greetingText}
                        </Text>
                        <Text style={styles.name}>
                            {this.state.name}
                        </Text>
                    </View>
                    <AlalogWatchComponent/>
                    <View style={styles.cardHeaderContainer}>
                        <Text style={styles.subHeading1}>
                            <Text style={styles.subHeading2}> Tasks </Text>List
                        </Text>
                        <View style={styles.addCardContainer}>
                            <Text style={styles.addCardPlus}>+</Text>
                        </View>
                    </View>
                    <FlatList
                        data={[{key: 1, name: 'a'}, {key: 2, name: 'b'}, {key: 2, name: 'a'}, {
                            key: 2,
                            name: 'b'
                        }, {key: 2, name: 'a'},
                            {key: 2, name: 'b'}, {key: 2, name: 'a'}, {key: 2, name: 'b'}]}
                        // extraData={this.state}
                        // keyExtractor={this._keyExtractor}
                        horizontal={true}

                        renderItem={({item}) => <View
                            style={[styles.cardContainer, {backgroundColor: item.key == 1 ? Theme.themeWhite : Theme.themeBlue,}]}>
                            <TouchableOpacity onPress={() => this.props.onPress()}>
                                <View style={styles.cardHeaderContainer}>
                                    {item.key == 1 ? <Text style={styles.taskHeading}>
                                            Daily Task
                                        </Text> :
                                        <Text style={styles.addCardPlus}>
                                            Tense Tuesday
                                        </Text>}
                                    <Text
                                        style={[item.key == 1 ? {color: Theme.themeBlue} : {color: Theme.themeWhite}, {fontSize: 20}]}>+</Text>
                                </View>

                                <View style={[styles.cardStyle, {opacity: item.key == 1 ? 0.4 : 1}]}>
                                    < Image source={item.key == 1 ? getImageUrls.Checked : getImageUrls.BlueRadio}
                                            style={styles.radio}/>
                                    <Text numberOfLines={1}
                                          style={[item.key == 1 ? styles.strikedText : {color: Theme.themeWhite}, {
                                              fontSize: 15
                                          }]}>
                                        WakeUp at <Text
                                        style={[item.key == 1 ? {color: Theme.themeBlue} : {color: Theme.themeWhite}]}> 8:00am</Text>
                                    </Text>
                                </View>

                                <View style={[styles.cardStyle, {opacity: item.key == 1 ? 0.4 : 1}]}>
                                    <Image source={item.key == 1 ? getImageUrls.Checked : getImageUrls.BlueRadio}
                                           style={styles.radio}/>
                                    <Text numberOfLines={1}
                                          style={[item.key == 1 ? styles.strikedText : {color: Theme.themeWhite}, {
                                              fontSize: 15
                                          }]}>
                                        Breakfast at <Text
                                        style={[item.key == 1 ? {color: Theme.themeBlue} : {color: Theme.themeWhite}]}> 9:00am</Text>
                                    </Text>
                                </View>

                                <View style={styles.cardStyle}>
                                    <Image source={item.key == 1 ? getImageUrls.Unchecked : getImageUrls.BlueRadio}
                                           style={styles.radio}/>
                                    <Text numberOfLines={1}
                                          style={[item.key == 1 ? {color: Theme.themeHeading} : {color: Theme.themeWhite}, {fontSize: 15}]}>
                                        Read story at 9:30am
                                    </Text>
                                </View>

                                <View style={styles.cardStyle}>
                                    <Image source={item.key == 1 ? getImageUrls.Unchecked : getImageUrls.BlueRadio}
                                           style={styles.radio}/>
                                    <Text numberOfLines={1}
                                          style={[item.key == 1 ? {color: Theme.themeHeading} : {color: Theme.themeWhite}, {fontSize: 15}]}>
                                        Work on project from 9:30am to 12:00pm
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f4f6',
        // backgroundColor: 'red'
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
    greetingContainer: {
        justifyContent: "flex-start",
        width: '100%'
    },
    greetingText: {
        fontSize: 30, color: Theme.themeWelcomeText,
        fontFamily: "Poppins-Medium",
    },
    name: {
        fontSize: 15, color: Theme.themeBlue,
        fontFamily: "Poppins-Bold",
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
        justifyContent: 'center',
        marginRight:25
    },
    addCardPlus: {
        color: Theme.themeWhite,
        fontSize: 20
    },
    cardContainer: {
        marginTop: 10,
        width: 200,
        marginRight: 40,
        borderRadius: 25,
        elevation: 20,
        shadowOffset: {width: 210, height: -10},
        borderColor: Theme.themeBlue,
        marginBottom: 50,
        padding: 25
    },
    taskHeading: {
        color: Theme.themeSubHeading,
        fontSize: 20
    },
    cardStyle: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    }, radio: {
        height: 20,
        width: 20
    },
    strikedText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: Theme.themeHeading,
    }
});
