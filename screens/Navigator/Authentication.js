import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import Login from '../Authentication/Login';

const AuthenticationStack = createStackNavigator();

const navOptionHandler = () => ({
    headerShown : false
})

export default class Authentication extends Component {
    render(){
        return(
            <AuthenticationStack.Navigator initialRouteName="Login">  
                <AuthenticationStack.Screen name="Login" component={Login} options={navOptionHandler}/>
                <AuthenticationStack.Screen name="BottomNavigator" component={BottomNavigator} options={navOptionHandler}/>
            </AuthenticationStack.Navigator>
        );
    }
}