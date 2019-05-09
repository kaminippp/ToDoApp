import React, { PureComponent } from 'react';
import { Image, View } from 'react-native';

export default class AnalogClock extends PureComponent {

    constructor(props) {
        super(props);

        this.setDate = this.setDate.bind(this);

        let d = new Date();

        this.state = {
            sec: d.getSeconds() * 6,
            min: d.getMinutes() * 6 + (d.getSeconds() * 6) / 60,
            hour: ((d.getHours() % 12)/ 12) * 360 + 90 +
                (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12,
        };

    }

    componentDidMount() {
        if (this.props.showRealTime) {
            this.timer = setInterval(() => {
                let d = new Date();
                this.setDate(d);
            }, 1000);
        } else {
            this.setDate(this.props.initialDate);
        }
    }

    componentWillUnmount() {
        if (this.props.showRealTime) {
            clearInterval(this.timer);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.initialDate != this.props.initialDate) {
            this.setDate(this.props.initialDate);
        }
    }

    setDate(d) {
        this.setState({sec: d.getSeconds() * 6});
        this.setState({
            min: d.getMinutes() * 6 +
                (d.getSeconds() * 6) / 60
        });
        this.setState({
            hour: ((d.getHours() % 12) / 12) * 360 + 90 +
                (d.getMinutes() * 6 + (d.getSeconds() * 6) / 60) / 12
        });
    }

    clockFrame() {
        return {
            width: this.props.clockSize,
            height: this.props.clockSize,
            position: 'relative',
            borderColor: '#f2f4f6',
            backgroundColor:'#f2f4f6',
            borderWidth: 0,
            borderRadius:this.props.clockSize,
            elevation: 7,
            // alignItems:'center',
            // justifyContent:"center"
        }
    }

    clockHolder() {
        return {
            width: this.props.clockSize,
            height: this.props.clockSize,
            position: 'absolute',
            right: -this.props.clockBorderWidth,
            bottom: -this.props.clockBorderWidth
        }
    }

    clockFace() {
        return {
            width: this.props.clockCentreSize,
            height: this.props.clockCentreSize,
            backgroundColor: this.props.clockCentreColor,
            borderRadius: this.props.clockCentreSize / 2,
            top: (this.props.clockSize - this.props.clockCentreSize) / 2.2,
            left: (this.props.clockSize - this.props.clockCentreSize) / 2.2
        }
    }

    hourHandStyles() {
        return {
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor: this.props.hourHandColor,
            top: this.props.clockSize/2.2,
            left: this.props.clockSize/2.2,
            marginVertical: -this.props.hourHandWidth,
            marginLeft: -this.props.hourHandLength/2.2,
            paddingVertical: this.props.hourHandWidth,
            paddingLeft: this.props.hourHandLength,
            borderTopLeftRadius: this.props.hourHandCurved ?
                this.props.hourHandWidth : 0,
            borderBottomLeftRadius: this.props.hourHandCurved ?
                this.props.hourHandWidth : 0
        }
    }

    minuteHandStyles() {
        return {
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor: this.props.minuteHandColor,
            top: this.props.clockSize/2.2,
            left: this.props.clockSize/2.2,
            marginTop: -(this.props.minuteHandLength/2.2),
            marginHorizontal: -this.props.minuteHandWidth,
            paddingTop: this.props.minuteHandLength,
            paddingHorizontal: this.props.minuteHandWidth,
            borderTopLeftRadius: this.props.minuteHandCurved ?
                this.props.minuteHandWidth : 0,
            borderTopRightRadius: this.props.minuteHandCurved ?
                this.props.minuteHandWidth : 0
        }
    }

    secondHandStyles() {
        return {
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor:this.props.secondHandColor,
            top: this.props.clockSize/2.2,
            left: this.props.clockSize/2.2,
            marginTop: -(this.props.secondHandLength/2.2),
            marginHorizontal: -this.props.secondHandWidth,
            paddingTop: this.props.secondHandLength,
            paddingHorizontal: this.props.secondHandWidth,
            borderTopLeftRadius: this.props.secondHandCurved ?
                this.props.secondHandWidth : 0,
            borderTopRightRadius: this.props.secondHandCurved ?
                this.props.secondHandWidth : 0
        }
    }

    render() {
        let background = null;
        return (
            <View style={ this.clockFrame() }>
                {background}
                <View style={ this.clockHolder() }>

                    <View style={[ this.hourHandStyles(),
                        {transform:[{ rotate: this.state.hour + 'deg' },
                                {translateX: -(this.props.hourHandOffset +
                                        this.props.hourHandLength/2.2) }]}]}
                    />

                    <View style={[ this.minuteHandStyles(),
                        {transform:[{ rotate: this.state.min + 'deg' },
                                { translateY: -(this.props.minuteHandOffset +
                                        this.props.minuteHandLength/2.2) }]}]}
                    />

                    <View style={[ this.secondHandStyles(),
                        {transform:[{ rotate: this.state.sec + 'deg' },
                                {translateY: -(this.props.secondHandOffset +
                                        this.props.secondHandLength/2.2) }]}]}
                    />

                    <View style={ this.clockFace() }/>

                </View>
            </View>
        )
    };
};

AnalogClock.defaultProps = {
    clockSize: 270,
    clockBorderWidth: 7,
    clockCentreSize: 15,
    clockCentreColor: 'black',
    hourHandColor: 'black',
    hourHandCurved: true,
    hourHandLength: 70,
    hourHandWidth: 3,
    hourHandOffset: 0,
    minuteHandColor: 'black',
    minuteHandCurved: true,
    minuteHandLength: 100,
    minuteHandWidth: 2,
    minuteHandOffset: 0,
    secondHandColor: 'black',
    secondHandCurved: false,
    secondHandLength: 120,
    secondHandWidth: 1,
    secondHandOffset: 0,

    showRealTime: true,
    initialDate: new Date(),
    withBackground: false
};
