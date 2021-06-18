import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import FoodInfo from '../components/Restaurant/FoodInfo';
import OrderSection from '../components/Restaurant/OrderSection';
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

type OrderItems = {
  menuId: number;
  price: number;
  quantity: number;
  total: number;
};

const Restaurant: React.FC<Props> = ({ route, navigation }) => {
  const [currentLocation, setCurrentLocation] =
    useState<CurrentLocation | undefined>();

  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);
  const [orderIems, setOrderItems] = useState<OrderItems[]>([]);

  useEffect(() => {
    if (!route.params) {
      navigation.goBack();
      return;
    }
    const { currentLocation, item } = route.params;
    setCurrentLocation(currentLocation);
    setRestaurant(item);
  }, []);

  const getOrderQuantitiens = (menuId: number) => {
    return orderIems.find(ele => ele.menuId === menuId)?.quantity || 0;
  };

  const editOrderHandler = (
    action: '+' | '-',
    menuId: number,
    price: number,
  ) => {
    let orderItemsCopy = [...orderIems];
    const itemIdx = orderItemsCopy.findIndex(item => (item.menuId = menuId));
    if (action === '+') {
      if (itemIdx >= 0) {
        orderItemsCopy[itemIdx].quantity = orderItemsCopy[itemIdx].quantity + 1;
        orderItemsCopy[itemIdx].total = orderItemsCopy[itemIdx].total + price;
      } else {
        const item = {
          total: price,
          quantity: 1,
          menuId,
          price,
        };
        orderItemsCopy.push(item);
      }
    } else {
      if (itemIdx >= 0 && orderItemsCopy[itemIdx].quantity > 0) {
        orderItemsCopy[itemIdx].quantity = orderItemsCopy[itemIdx].quantity - 1;
        orderItemsCopy[itemIdx].total = orderItemsCopy[itemIdx].total - price;
      }
    }
    // console.log(`orderItemsCopy`, orderItemsCopy);
    setOrderItems([...orderItemsCopy]);
  };

  const getBasketTotalQuantity = () => {
    return orderIems.reduce((a, b) => a + (b.quantity || 0), 0);
  };
  const getBasketTotalTotal = () => {
    return orderIems.reduce((a, b) => a + (b.total || 0), 0);
  };

  const goToOrderScreen = () => {
    navigation.navigate('OrderDelivery', {
      restaurant: restaurant!,
      currentLocation: currentLocation!,
    });
  };

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
          <FoodInfo
            menu={restaurant.menu}
            editOrder={editOrderHandler}
            orderQuantity={getOrderQuantitiens}
          />
          {/* order section */}
          <OrderSection
            quantities={getBasketTotalQuantity()}
            totalPrice={getBasketTotalTotal()}
            goToOrderScreen={goToOrderScreen}
          />
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
