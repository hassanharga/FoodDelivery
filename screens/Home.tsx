import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import HomeMainCategories from '../components/HomeMainCategories';
import { COLORS } from '../constants';
import {
  categoryData,
  initialCurrentLocation,
  restaurantData,
} from '../dummyData';

const Home: React.FC = () => {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* page header */}
      <HomeHeader location={currentLocation.streetName} />

      {/* categoriest */}
      <HomeMainCategories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
