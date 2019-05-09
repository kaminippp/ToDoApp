import React from "react";
import {Theme} from "./theme"
import {scale, verticalScale, moderateScale, ScaledSheet} from "react-native-size-matters";
import {Platform} from 'react-native';
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

export const commonStyle = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Theme.themeBlack,
        paddingLeft: moderateScale(30),
        paddingRight: moderateScale(30),
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: Theme.themeBlack,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    safeArea: {
        flex: 1,
        // backgroundColor: '#ddd'
    },
    appHeaderSimpli: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 41,
        color: Theme.themeWhite
    },
    appHeaderClaim: {
        paddingTop: Platform.OS === 'android' ? '2.4@ms' : '0@ms',
        fontFamily: 'Poppins-Light',
        fontSize: 41,
        color: Theme.themeWhite
    },
    text: {
        color: Theme.themeWhite
    },
    HeaderBackImg: {
        height: "13.7@ms",
        width: "20@ms",
        marginLeft: "30@ms",
        //marginTop: '42@ms'
    },
    HeaderNavigation: {
        shadowOpacity: 0,
        borderBottomWidth: 0,
        shadowColor: Theme.themeBlack,
        elevation: 0,
        paddingTop: 42,
        backgroundColor: Theme.themeBlack
    },
    globalErrorView: {
        // flex: 1,
        // marginTop: '2@ms',
        marginBottom: '2@ms',
        // position: 'absolute',
        width: '100%',
        // height: '2%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        // right: 0,
        // bottom: 0,
        // backgroundColor: 'rgb(208,2,27)'
    },
});