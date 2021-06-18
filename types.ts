import { ImageURISource } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';

export type TabsNavigatorParamsList = {
  Home: undefined;
  Search: undefined;
  Like: undefined;
  User: undefined;
};

export type StackNavigatorParamsList = {
  Tabs: NavigatorScreenParams<TabsNavigatorParamsList>;
  Restaurant: {
    currentLocation: CurrentLocation;
    item: Restaurant;
  };
  OrderDelivery: { currentLocation: CurrentLocation; restaurant: Restaurant };
};

export type Category = {
  id: number;
  name: string;
  icon: ImageURISource;
};

export type Location = {
  latitude: number;
  longitude: number;
};

export type CurrentLocation = {
  streetName: string;
  gps: Location;
};

export type Courier = {
  avatar: ImageURISource;
  name: string;
};

export type Menu = {
  menuId: number;
  name: string;
  photo: ImageURISource;
  description: string;
  calories: number;
  price: number;
};

export type Restaurant = {
  id: number;
  name: string;
  rating: number;
  categories: number[];
  priceRating: number;
  photo: ImageURISource;
  duration: string;
  location: Location;
  courier: Courier;
  menu: Menu[];
};
