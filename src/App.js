import React from 'react';
import {
    asset,
    Pano,
    Text,
    View,
    AmbientLight,
    VrButton
} from 'react-vr';
// import Primitives from './Primitives';
    

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'salvador-panorama2.jpg'
        }
    }
    changeScene = (value) => {
        this.setState({
            background: value,
        })
        console.log('background: ', this.state.background);
    }
    loadScene = () => {
        return <Pano source={asset(this.state.background)} />;
        // if (value === 1) {
        //     return 'salvador-panorama2.jpg';
        // } else if (value === 2) {
        //     return 'salvador-panorama.jpg';
        // } else if (value === 3) {
        //     return 'salvador-panorama2.jpg';
        // } else if (value === 4) {   
        //     return 'salvador-panorama.jpg';
        // } else {
        //     return 'salvador-panorama2.jpg';
        // }
        
    }
    render() {
        return (
            <View>
                <AmbientLight intensity={2.5} />
                <VrButton onClick={() => this.changeScene('salvador-panorama2.jpg')}><Text style={{
                    backgroundColor: 'rgba(190,232,102,0.6)',
                    fontSize: 0.6,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{ translate: [0, 0, -3] }],
                }}>Rio Vermelhow</Text></VrButton>
                <VrButton onClick={() => this.changeScene('chess-world.jpg')}><Text style={{
                    backgroundColor: 'rgba(190,232,102,0.6)',
                    fontSize: 0.6,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{ translate: [0, 0, -3] }],
                }}>Chess</Text></VrButton>
                {/* <VrButton onClick={this.changeScene('salvador-panorama.jpg')}><Text>Praia do Forte</Text></VrButton> */}
                {/* <VrButton onClick={this.setScene(3)}><Text>Itapoa</Text></VrButton>
                <VrButton onClick={this.setScene(4)}><Text>Iberastar</Text> </VrButton>
                <VrButton onClick={this.setScene(5)}><Text>Rio Vermelho</Text> </VrButton> */}
                {/* <Pano source={asset('salvador-panorama2.jpg')} /> */}
                {this.loadScene()}
                {/* <Pano source={asset(this.loadScene(5))} /> */}
                {/* <Text
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
                </Text> */}
                {/* <Primitives /> */}
            </View>
        );
    }
};
