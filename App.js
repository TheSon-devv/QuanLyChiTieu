import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from './screens/Authentication';

const App = ({navigation}) => {
    return (
      <NavigationContainer>
          <Authentication navigation={navigation}/>
      </NavigationContainer>
    );
};
export default App;