import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import MainCategories from '../components/Home/MainCategories';
import RestaurantList from '../components/Home/RestaurantList';
import { COLORS, icons } from '../constants';
import {
  categoryData,
  initialCurrentLocation,
  restaurantData,
} from '../dummyData';
import {
  Category,
  Restaurant,
  StackNavigatorParamsList,
  TabsNavigatorParamsList,
} from '../types';

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabsNavigatorParamsList, 'Home'>,
    StackNavigationProp<StackNavigatorParamsList>
  >;
};
const Home: React.FC<Props> = ({ navigation }) => {
  const [categories] = useState(categoryData);

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const [allRestaurants] = useState(restaurantData);

  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantData);

  const [currentLocation] = useState(initialCurrentLocation);

  useEffect(() => {
    console.log('categories', categories.length);
    setSelectedCategory(categories[0]);
    onSelectRestaurant(categories[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectRestaurant = (category: Category) => {
    const restaurantList = allRestaurants.filter(ele =>
      ele.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
  };

  const onSelectCategory = (category: Category) => {
    onSelectRestaurant(category);
    setSelectedCategory(category);
  };

  const getCatNameById = (id: number) => {
    const category = categories.find(ele => ele.id === +id);
    return category?.name || '';
  };

  const navigateTo = (item: Restaurant) => {
    navigation.navigate('Restaurant', {
      item,
      currentLocation,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* page header */}
      <Header
        title={currentLocation.streetName}
        leftIcon={icons.nearby}
        rightIcon={icons.basket}
      />

      {/* categoriest */}
      <MainCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      {/* retaurant list */}
      <RestaurantList
        restaurants={restaurants}
        getCatNameById={getCatNameById}
        navigateTo={navigateTo}
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
