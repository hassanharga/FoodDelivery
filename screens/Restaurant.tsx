import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import FoodInfo from '../components/Restaurant/FoodInfo';
import { COLORS, icons } from '../constants';
import {
  CurrentLocation,
  Restaurant as RestaurantType,
  StackNavigatorParamsList,
} from '../types';

export type Props = {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Restaurant'>;
  route: RouteProp<StackNavigatorParamsList, 'Restaurant'>;
};

const Restaurant: React.FC<Props> = ({ route, navigation }) => {
  const [, setCurrentLocation] = useState<CurrentLocation | undefined>();

  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);

  useEffect(() => {
    console.log('route', route.params);
    if (route.params) {
      const { currentLocation, item } = route.params;
      setCurrentLocation(currentLocation);
      setRestaurant(item);
    }
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      {/* page header */}
      {restaurant && (
        <>
          <Header
            title={restaurant.name}
            leftIcon={icons.back}
            rightIcon={icons.list}
            leftIconAction={() => {
              navigation.goBack();
            }}
          />
          {/* food info */}
          <FoodInfo menu={restaurant.menu} />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default Restaurant;
