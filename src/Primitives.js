import React from 'react';
import {
    Box,
    View
} from 'react-vr';

export default class BoxEx extends React.Component {
    render() {
        return (
            <View>
                <Box dimWidth={1} dimHeight={1} dimDepth={1} />
            </View>
        );
    }
};
