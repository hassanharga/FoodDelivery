import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, routes, SHADOW, SIZES } from '../../constants';
import { CurrentLocation, Restaurant } from '../../dummyData';

const RestaurantList: React.FC<{
  restaurants: Restaurant[];
  currentLocation: CurrentLocation;
  getCatNameById: (id: number) => string;
}> = ({ restaurants, currentLocation, getCatNameById }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Restaurant }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate(routes.RESTAURANT, {
            item,
            currentLocation,
          });
        }}>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          {/* image */}
          <Image source={item.photo} style={styles.image} />
          {/* duartion */}
          <View style={styles.duartion}>
            <Text style={styles.time}>{item.duration}</Text>
          </View>
        </View>
        {/* name */}
        <Text style={styles.name}>{item.name}</Text>
        {/* rating */}
        <View style={styles.rating}>
          <Image source={icons.star} style={styles.star} />
          <Text style={styles.ratingNumber}>{item.rating}</Text>
          {/* label */}
          <View style={styles.label}>
            {item.categories.map(cat => (
              <View key={cat} style={{ flexDirection: 'row' }}>
                <Text style={styles.ratingNumber}>
                  {getCatNameById(cat)} {'. '}
                </Text>
                {[1, 2, 3].map(n => (
                  <Text
                    key={n}
                    style={{
                      ...styles.ratingNumber,
                      color:
                        n <= item.priceRating ? COLORS.black : COLORS.darkgray,
                    }}>
                    $
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={restaurants}
      keyExtractor={({ id }) => `${id}`}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: SIZES.padding * 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius,
  },
  duartion: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW,
  },
  time: {
    ...FONTS.h4,
  },
  name: {
    ...FONTS.body2,
  },
  ratingNumber: {
    ...FONTS.body3,
  },
  rating: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
  },
  star: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
    marginRight: 10,
  },
  label: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});

export default RestaurantList;
