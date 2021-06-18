import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Animated,
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { Menu } from '../../types';

const scrollX = new Animated.Value(0);
const dotPosition = Animated.divide(scrollX, SIZES.width);

const Dots: React.FC<{ menu: Menu[] }> = ({ menu }) => {
  return (
    <View style={{ height: 30 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height: SIZES.padding,
        }}>
        {menu.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
            extrapolate: 'clamp',
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: SIZES.radius,
                marginHorizontal: 6,
                width: dotSize,
                height: dotSize,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const FoodInfo: React.FC<{
  menu: Menu[];
  editOrder: (action: '+' | '-', menuId: number, price: number) => void;
  orderQuantity: (qt: number) => number;
}> = ({ menu, editOrder, orderQuantity }) => {
  return (
    <>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}>
        {menu &&
          menu.map((ele, idx) => (
            <View key={`menu-${idx}`} style={{ alignItems: 'center' }}>
              <View style={{ height: SIZES.height * 0.35 }}>
                <Image
                  source={ele.photo}
                  style={styles.image}
                  resizeMode="cover"
                />
                {/* quantity */}
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantity}
                    onPress={() => {
                      editOrder('-', ele.menuId, ele.price);
                    }}>
                    <Text style={{ ...FONTS.body1 }}>-</Text>
                  </TouchableOpacity>
                  <View style={styles.q}>
                    <Text style={{ ...FONTS.h2 }}>
                      {orderQuantity(ele.menuId)}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      editOrder('+', ele.menuId, ele.price);
                    }}
                    style={{ ...styles.quantity, ...styles.plus }}>
                    <Text style={{ ...FONTS.body1 }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* name & description */}
              <View style={styles.nameContainer}>
                <Text style={styles.name}>
                  {ele.name} - {ele.price.toFixed(2)}
                </Text>
                <Text style={{ ...FONTS.body3 }}>{ele.description}</Text>
              </View>
              {/* calories */}
              <View style={styles.calories}>
                <Image style={styles.caloryImage} source={icons.fire} />
                <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
                  {ele.calories} cal
                </Text>
              </View>
            </View>
          ))}
      </Animated.ScrollView>
      <Dots menu={menu} />
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: '100%',
  },
  quantityContainer: {
    position: 'absolute',
    bottom: -20,
    width: SIZES.width,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  quantity: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  q: {
    width: 50,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  nameContainer: {
    width: SIZES.width,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: SIZES.padding * 2,
  },
  name: {
    marginVertical: 10,
    textAlign: 'center',
    ...FONTS.h2,
  },
  calories: {
    marginTop: 10,
    flexDirection: 'row',
  },
  caloryImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default FoodInfo;
