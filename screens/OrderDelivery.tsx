import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigatorParamsList } from '../types';

export type Props = {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'OrderDelivery'>;
  route: RouteProp<StackNavigatorParamsList, 'OrderDelivery'>;
};

const OrderDelivery: React.FC<Props> = () => {
  return (
    <View>
      <Text>OrderDelivery</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default OrderDelivery;
