import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  AccessibilityState,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import Svg, { Path } from 'react-native-svg';
import { COLORS, icons } from '../constants';
import { Home } from '../screens';
import { TabsNavigatorParamsList } from '../types';

const Tabs = createBottomTabNavigator<TabsNavigatorParamsList>();

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

const TabBarCustomButton: React.FC<{
  accessibilityState: AccessibilityState | undefined;
  onPress?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent,
  ) => void;
}> = ({ children, onPress, accessibilityState }) => {
  const isSelected = accessibilityState?.selected;
  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 60,
        backgroundColor: COLORS.white,
      }}
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const CustomTabBar = ({ props }: any) => {
  if (isIphoneX())
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}></View>
        <BottomTabBar {...props} />
      </View>
    );

  return <BottomTabBar {...props} />;
};

const TabsNavigator: React.FC = () => {
  const { Navigator, Screen } = Tabs;
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarImage focused={focused} icon={icons.cutlery} />
          ),
          tabBarButton: ({ onPress, accessibilityState, ...props }) => (
            <TabBarCustomButton
              onPress={onPress}
              accessibilityState={accessibilityState}
              {...props}
            />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarImage focused={focused} icon={icons.search} />
          ),
          tabBarButton: ({ onPress, accessibilityState, ...props }) => (
            <TabBarCustomButton
              onPress={onPress}
              accessibilityState={accessibilityState}
              {...props}
            />
          ),
        }}
      />
      <Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarImage focused={focused} icon={icons.like} />
          ),
          tabBarButton: ({ onPress, accessibilityState, ...props }) => (
            <TabBarCustomButton
              onPress={onPress}
              accessibilityState={accessibilityState}
              {...props}
            />
          ),
        }}
      />
      <Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarImage focused={focused} icon={icons.user} />
          ),
          tabBarButton: ({ onPress, accessibilityState, ...props }) => (
            <TabBarCustomButton
              onPress={onPress}
              accessibilityState={accessibilityState}
              {...props}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default TabsNavigator;
