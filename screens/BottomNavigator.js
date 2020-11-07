import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryStack from './History/HistoryStack';
import HistoryHome from './History/HistoryHome';
import StatisticalHome from './Statistical/StatisticalHome';

const Tab = createBottomTabNavigator();

export default class BottomNavigator extends Component {
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="HistoryStack" component={HistoryStack} />
                <Tab.Screen name="Statistical" component={StatisticalHome}/>
            </Tab.Navigator>
        );
    }
}