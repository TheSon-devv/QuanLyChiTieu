import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitialNavigator from './screens/Navigator/InitialNavigator';
import Authentication from './screens/Navigator/Authentication';

class App extends Component {
    render() {
        const navigation = this.props;
        return (
            <NavigationContainer>
                <InitialNavigator navigation={navigation}/>
            </NavigationContainer>
        );
    }

};
export default App;