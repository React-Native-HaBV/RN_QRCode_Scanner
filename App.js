/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoadingScreen from "./src/screens/LoadingScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {navigationRef} from "./src/rootNavigation";


const Stack = createStackNavigator();

const MyApp = () => {
    return (
        <Stack.Navigator
            initialRouteName='Loading'
        >
            <Stack.Screen
                name={'Loading'}
                component={LoadingScreen}
            />
            <Stack.Screen
                name={'SignIn'}
                component={SignInScreen}
            />
            <Stack.Screen
                name={'SignUp'}
                component={SignUpScreen}
            />
            <Stack.Screen
                name={'Home'}
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};

export default () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <AuthProvider>
                <MyApp
                    ref={(navigator) => { setNavigator(navigator) }}
                />
            </AuthProvider>
        </NavigationContainer>
    );
};


