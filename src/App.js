import React from 'react';
import {
    asset,
    Pano,
    Text,
    View,
    AmbientLight,
    VrButton
} from 'react-vr';
    

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
    }
    render() {
        return (
            <View>
                <AmbientLight intensity={2.5} />
                <VrButton onClick={() => this.changeScene('salvador-panorama2.jpg')}><Text style={{
                    backgroundColor: 'rgba(190,232,102,0.6)',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    marginBottom: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{ translate: [0, 0, -3] }],
                }}>Rio Vermelho</Text></VrButton>
                <VrButton onClick={() => this.changeScene('itapoa.jpg')}><Text style={{
                    backgroundColor: 'rgba(190,232,102,0.6)',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    marginBottom: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{ translate: [0, 0, -3] }],
                }}>Itapoa</Text></VrButton>
                <VrButton onClick={() => this.changeScene('pelourinho.jpg')}><Text style={{
                    backgroundColor: 'rgba(190,232,102,0.6)',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    marginBottom: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{ translate: [0, 0, -3] }],
                }}>Pelourinho</Text></VrButton>
                <VrButton onClick={() => this.changeScene('rio-vermelho-watercolor.jpg')}><Text style={{
                    backgroundColor: 'rgba(190,232,102,0.6)',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    marginBottom: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{ translate: [0, 0, -3] }],
                }}>Salvador Watercolor</Text></VrButton>
                
                {this.loadScene()}
            </View>
        );
    }
};
