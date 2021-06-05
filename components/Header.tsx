import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const Header: React.FC<{
  title: string | undefined;
  leftIcon: typeof import('*.png');
  rightIcon: typeof import('*.png');
  leftIconAction?: () => void;
  rightIconAction?: () => void;
}> = ({ title, leftIcon, rightIcon, leftIconAction, rightIconAction }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.icon} onPress={leftIconAction}>
      <Image source={leftIcon} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.title}>
        <Text style={{ ...FONTS.h3 }}>{title}</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{ ...styles.icon, ...styles.icon2 }}
      onPress={rightIconAction}>
      <Image source={rightIcon} resizeMode="contain" style={styles.image} />
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
  title: {
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
