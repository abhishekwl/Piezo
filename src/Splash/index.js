import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, StatusBar, View } from 'react-native';

class Splash extends React.PureComponent {
    render() {
        const {
            containerStyle,
            lottieStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <StatusBar backgroundColor='white' barStyle='dark-content' />

                <LottieView speed={0.5} style={lottieStyle} source={require('../assets/lottie/box.json')} autoPlay loop />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    lottieStyle: {
        height: 256,
        width: 256
    }
});

export default Splash;