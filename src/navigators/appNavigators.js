import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import Listing from '../screens/Listing';
import TabNavigators from './TabNavigators';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={Listing} />
        <Stack.Screen name="Profile" component={TabNavigators} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
