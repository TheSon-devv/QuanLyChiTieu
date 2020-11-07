import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryHome from './HistoryHome';
import AddSpending from './AddSpending';

const Stack = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})

export default class HistoryStack extends Component {
    render(){
        return(
            <Stack.Navigator initialRouteName="HistoryHome">
                <Stack.Screen name="HistoryHome" component={HistoryHome} options={navOptionHandler}/>
                <Stack.Screen name="AddSpending" component={AddSpending} options={navOptionHandler}/>
            </Stack.Navigator>
        );
    }
}