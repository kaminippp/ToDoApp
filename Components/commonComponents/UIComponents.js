import React from 'react';
import {
    View,
    Image, TouchableOpacity
}
    from 'react-native';
import {getImageUrls} from "../../common/ImagePaths";
import {Theme} from "../../common/theme";

export const Header = ({data}) => <View style={{
    flexDirection: "row", justifyContent: 'space-between',
    backgroundColor: "#f2f4f6", height: 40
}}>
    <View style={{flex: 2, justifyContent: "flex-start",}}>
        <Image source={getImageUrls.Drawer} style={{height: 30, width: 30}}/>
    </View>
    <View style={{
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: Theme.themeBlue,
        marginRight: 25
    }}>
        <Image source={getImageUrls.Avatar} style={{height: 22, width: 22}}/>
    </View>
</View>;


export const HeaderBack = ({data}) =>
    <View style={{
        flexDirection: "row", justifyContent: 'space-between',
        backgroundColor: "#f2f4f6", height: 40, marginLeft: 25
    }}>
            <View style={{flex: 2, justifyContent: "flex-start"}}>
                <TouchableOpacity onPress={() => data.onPress()}>
                <Image source={getImageUrls.Back} style={{height: 30, width: 30}}/>
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                height: 30,
                width: 30,
                borderRadius: 30,
                backgroundColor: Theme.themeBlue,
                marginRight: 25
            }}>
                <Image source={getImageUrls.Avatar} style={{height: 22, width: 22}}/>
            </View>
    </View>
;