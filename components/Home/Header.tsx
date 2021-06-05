import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../constants';

const Header: React.FC<{ location: string }> = ({ location }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.icon}>
      <Image source={icons.nearby} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.location}>
        <Text style={{ ...FONTS.h3 }}>{location}</Text>
      </View>
    </View>
    <TouchableOpacity style={{ ...styles.icon, ...styles.icon2 }}>
      <Image source={icons.basket} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: { flexDirection: 'row', height: 50, marginVertical: 5 },
  icon: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  icon2: {
    paddingRight: SIZES.padding * 2,
    paddingLeft: 0,
  },
  location: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Header;
