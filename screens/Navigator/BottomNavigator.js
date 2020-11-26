import React, { Component } from 'react';
import { View ,Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryStack from '../History/HistoryStack';
import HistoryHome from '../History/HistoryHome';
import StatisticalHome from '../Statistical/StatisticalHome';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import User from '../User/User';

const Tab = createBottomTabNavigator();

export default class BottomNavigator extends Component {
    render(){
        return(
            <Tab.Navigator
                tabBarOptions = {{
                    activeTintColor:'tomato',
                    inactiveTintColor:'gray'
                }}
            >
                <Tab.Screen name="HistoryStack" component={HistoryStack} 
                    options={{
                    tabBarLabel: 'Lịch sử',
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="home" size={26} color={color}/>
                    ),
                }}
                />
                <Tab.Screen name="Statistical" component={StatisticalHome} 
                     options={{
                    tabBarLabel: 'Thống kê',
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="archive" size={24} color={color}/>
                    ),
                }}
                />
                <Tab.Screen name="User" component={User} 
                     options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="user" size={24} color={color}/>
                    ),
                }}
                />
            </Tab.Navigator>
        );
    }
}