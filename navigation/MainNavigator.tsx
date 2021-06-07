import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TabsNavigator from './TabsNavigator';
import { OrderDelivery, Restaurant } from '../screens';
import { StackNavigatorParamsList } from '../types';

const Stack = createStackNavigator<StackNavigatorParamsList>();

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = Stack;
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Tabs">
        <Screen name="Tabs" component={TabsNavigator} />
        <Screen name="Restaurant" component={Restaurant} />
        <Screen name="OrderDelivery" component={OrderDelivery} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
