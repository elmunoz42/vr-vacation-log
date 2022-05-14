import React from 'react';
import {
    asset,
    Pano,
    Text,
    View,
} from 'react-vr';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('salvador-panorama2.jpg')} />
                <Text
                    style={{
                        backgroundColor: 'rgba(190,232,102,0.6)',
                        fontSize: 0.6,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{ translate: [0, 0, -3] }],
                    }}>
                    Mother's day - Salvador, Bahia, May 2022
                </Text>
            </View>
        );
    }
};
