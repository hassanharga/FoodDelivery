import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../constants';

const OrderSection: React.FC<{
  quantities: number;
  totalPrice: number;
  goToOrderScreen: () => void;
}> = ({ quantities, totalPrice, goToOrderScreen }) => {
  return (
    <View style={styles.orderContainer}>
      <View style={styles.commonStyle}>
        <Text style={{ ...FONTS.h3 }}>{quantities} items in the cart</Text>
        <Text style={{ ...FONTS.h3 }}>${totalPrice}</Text>
      </View>
      {/* location */}
      <View style={styles.commonStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={icons.pin}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.darkgray,
            }}
          />
          <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
            Location
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={icons.master_card}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.darkgray,
            }}
          />
          <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
        </View>
      </View>
      {/* order button */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: SIZES.padding * 2,
        }}>
        <TouchableOpacity style={styles.button} onPress={goToOrderScreen}>
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    borderColor: COLORS.darkgray,
    backgroundColor: COLORS.lightGray3,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  commonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
  },
  button: {
    padding: SIZES.padding,
    width: SIZES.width * 0.9,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
});

export default OrderSection;
