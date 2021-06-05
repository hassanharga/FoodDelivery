import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SHADOW, SIZES } from '../../constants';
import { Restaurant } from '../../dummyData';

const RestaurantList: React.FC<{
  restaurants: Restaurant[];
}> = ({ restaurants }) => {
  const renderItem = ({ item }: { item: Restaurant }) => {
    // TODO: nagivate to restaurant screen
    return (
      <TouchableOpacity style={styles.card}>
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
    // borderTopLeftRadius: SIZES.radius,
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
});

export default RestaurantList;
