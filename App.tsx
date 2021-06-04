import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { routes } from './constants';
import Tabs from './navigation/Tabs';
import { OrderDelivery, Restaurant } from './screens';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={routes.HOME}>
        <Stack.Screen name={routes.HOME} component={Tabs} />
        <Stack.Screen name={routes.RESTAURANT} component={Restaurant} />
        <Stack.Screen name={routes.ORDERDELIVERY} component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
