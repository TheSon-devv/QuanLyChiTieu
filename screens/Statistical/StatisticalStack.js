import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})

export default class StatisticalStack extends Component {
    render(){
        return(
            <Stack.Navigator >

            </Stack.Navigator>
        );
    }
}