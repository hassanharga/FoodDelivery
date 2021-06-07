import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SHADOW, SIZES } from '../../constants';
import { Restaurant } from '../../types';
export type Props = {
  restaurants: Restaurant[];
  getCatNameById: (id: number) => string;
  navigateTo: (item: Restaurant) => void;
};

const RestaurantList: React.FC<Props> = ({
  restaurants,
  getCatNameById,
  navigateTo,
}) => {
  const renderItem = ({ item }: { item: Restaurant }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigateTo(item);
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
              <View key={cat} style={styles.category}>
                <Text style={styles.ratingNumber}>
                  {getCatNameById(cat)} {'. '}
                </Text>
              </View>
            ))}
            {[1, 2, 3].map(n => (
              <Text
                key={n}
                style={{
                  ...styles.ratingNumber,
                  color: n <= item.priceRating ? COLORS.black : COLORS.darkgray,
                }}>
                $
              </Text>
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
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: 30,
  },
  card: {
    marginBottom: SIZES.padding * 2,
  },
  category: { flexDirection: 'row' },
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
