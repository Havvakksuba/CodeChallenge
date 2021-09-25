import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

export default class Router extends Component {
    render() {
        return (

            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
            </Stack.Navigator>

        )
    }
}
