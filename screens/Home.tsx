import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Home/Header';
import MainCategories from '../components/Home/MainCategories';
import RestaurantList from '../components/Home/RestaurantList';
import { COLORS } from '../constants';
import {
  Category,
  categoryData,
  initialCurrentLocation,
  Restaurant,
  restaurantData,
} from '../dummyData';

const Home: React.FC = () => {
  const [categories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);
  const [allRestaurants] = useState(restaurantData);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantData);
  const [currentLocation] = useState(initialCurrentLocation);

  const onSelectCategory = (category: Category) => {
    const restaurantList = allRestaurants.filter(ele =>
      ele.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  };

  const getCatNameById = (id: number) => {
    const category = categories.find(ele => ele.id === +id);
    return category?.name || '';
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* page header */}
      <Header location={currentLocation.streetName} />

      {/* categoriest */}
      <MainCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      {/* retaurant list */}
      <RestaurantList
        restaurants={restaurants}
        currentLocation={currentLocation}
        getCatNameById={getCatNameById}
      />
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
