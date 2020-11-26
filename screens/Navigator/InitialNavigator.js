import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreenNavigator from "./SplashScreenNavigator";
import Authentication from "./Authentication";
import Login from "../Authentication/Login";

const Stack = createStackNavigator();
const navOption = () => ({
    headerShown : false
})

export default class InitialNavigator extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreenNavigator} options={navOption}/>
                <Stack.Screen name="Login" component={Login} options={navOption}/>
            </Stack.Navigator>
        )
    }
}