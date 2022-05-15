import React from 'react';
import {
    Box,
    Cylinder,
    Sphere,
    View,
    Text
} from 'react-vr';

export default class Primitives extends React.Component {
    render() {
        return (
            <View>
                <Text style={{color:'blue'}}>
                    Box
                </Text>
                <Box dimWidth={2} dimHeight={2} dimDepth={1} 
                    style={{color:'red'}}
                />
            </View>
        );
    }
};
