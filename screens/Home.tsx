import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeHeader from '../components/Home/HomeHeader';
import HomeMainCategories from '../components/Home/HomeMainCategories';
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
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);
  const [allRestaurants] = useState(restaurantData);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [currentLocation] = useState(initialCurrentLocation);

  const onSelectCategory = (category: Category) => {
    const restaurantList = allRestaurants.filter(ele =>
      ele.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* page header */}
      <HomeHeader location={currentLocation.streetName} />

      {/* categoriest */}
      <HomeMainCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      {/* retaurant list */}
      <RestaurantList restaurants={restaurants} />
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
