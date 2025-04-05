import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateAccount, Home, Login, Onboarding} from '../screens';

const Stack = createNativeStackNavigator();

const AuthSatck = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  );
};

export default AuthSatck;
