import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Authentication from "./Authentication";

class AppNavigator extends Component {
    render() {
        const navigation = this.props;
        return (
            <NavigationContainer>
                <Authentication navigation={navigation} />
            </NavigationContainer>
        );
    }

};
export default AppNavigator;