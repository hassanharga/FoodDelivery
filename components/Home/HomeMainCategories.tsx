import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SHADOW, SIZES } from '../../constants';
import { Category } from '../../dummyData';

const HomeMainCategories: React.FC<{
  categories: Category[];
  selectedCategory: Category | null;
  onSelectCategory: (item: Category) => void;
}> = ({ categories, selectedCategory, onSelectCategory }) => {
  const renderItem = ({ item }: { item: Category }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.category,
          ...SHADOW,
          backgroundColor:
            selectedCategory?.id === item.id ? COLORS.primary : COLORS.white,
        }}
        onPress={() => {
          onSelectCategory(item);
        }}>
        <View
          style={{
            ...styles.imageContainer,
            backgroundColor:
              selectedCategory?.id === item.id ? COLORS.white : COLORS.primary,
          }}>
          <Image source={item.icon} resizeMode="contain" style={styles.image} />
        </View>
        <Text
          style={{
            ...styles.name,
            color:
              selectedCategory?.id === item.id
                ? COLORS.lightGray
                : COLORS.primary,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text style={{ ...FONTS.h1 }}>Main</Text>
      <Text style={{ ...FONTS.h1 }}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }) => `${id}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  category: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    marginRight: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  name: {
    marginTop: SIZES.padding,
    ...FONTS.body5,
  },
});

export default HomeMainCategories;