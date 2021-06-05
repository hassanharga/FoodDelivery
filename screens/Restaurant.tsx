import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import FoodInfo from '../components/Restaurant/FoodInfo';
import { COLORS, icons } from '../constants';
import { CurrentLocation, Restaurant as RestaurantType } from '../dummyData';

const Restaurant: React.FC = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const [currentLocation, setCurrentLocation] =
    useState<CurrentLocation | undefined>();
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);

  useEffect(() => {
    console.log(`router`, router.params);
    if (router.params) {
      const { currentLocation, item } = router.params as {
        currentLocation: CurrentLocation;
        item: RestaurantType;
      };
      setCurrentLocation(currentLocation);
      setRestaurant(item);
    }
  }, [router]);

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
