import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { COLORS, icons, routes } from '../constants';
import { Home } from '../screens';

const Tab = createBottomTabNavigator();

const TabBarImage: React.FC<{ focused: boolean; icon: ImageSourcePropType }> =
  ({ focused, icon }) => {
    return (
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? COLORS.primary : COLORS.secondary,
        }}
      />
    );
  };

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarImage focused={focused} icon={icons.cutlery} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.SEARCH}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarImage focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LIKE}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarImage focused={focused} icon={icons.like} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.USER}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarImage focused={focused} icon={icons.user} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
