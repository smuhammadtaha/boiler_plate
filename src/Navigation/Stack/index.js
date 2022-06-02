import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from '../../Screens/Splash';
import { Login } from '../../Screens/Login';
import { Signup } from '../../Screens/Signup';
import { Notification } from '../../Screens/Notification';
import { Home } from '../../Screens/Home';

const Stack = createNativeStackNavigator();



export const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen 
            name="Splash"
            // options={{headerShown:false}}
            component ={SplashScreen}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            />
            <Stack.Screen
            name="Signup"
            component={Signup}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            />
            <Stack.Screen
            name="Notification"
            component={Notification}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
