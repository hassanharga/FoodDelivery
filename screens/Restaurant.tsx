import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { routes } from '../constants';

const Restaurant: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Restaurant</Text>
      <Button
        title={'back to Home'}
        onPress={() => {
          navigation.navigate(routes.HOME);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Restaurant;
