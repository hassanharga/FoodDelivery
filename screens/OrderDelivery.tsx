import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import Map from '../components/OrderDelivery/Map';
import { StackNavigatorParamsList } from '../types';

export type Props = {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'OrderDelivery'>;
  route: RouteProp<StackNavigatorParamsList, 'OrderDelivery'>;
};

const OrderDelivery: React.FC<Props> = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* map */}
      <Map
        restaurant={route.params.restaurant}
        currentLocation={route.params.currentLocation}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default OrderDelivery;
