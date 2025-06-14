import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SensorScreen from '../screens/Sensors/SensorsScreen/index.js';
import SplashScreen from '../screens/Splash/SplashScreen';
import HomeScreen from '../screens/Home/HomeScreen';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Sensors: undefined;
  SensorDetail: { sensorId: string };
  ConfigScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sensors" component={SensorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}