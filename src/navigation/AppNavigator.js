import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import OverviewScreen from '../screens/OverviewScreen';
import LocationScreen from '../screens/LocationScreen';
import InterruptionTimeScreen from '../screens/InterruptionTimeScreen';
import DamagesScreen from '../screens/DamagesScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Interruption Time" component={InterruptionTimeScreen} />
        <Stack.Screen name="Damages" component={DamagesScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
