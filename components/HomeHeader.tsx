import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const HomeHeader: React.FC<{ location: string }> = ({ location }) => (
  <View style={{ flexDirection: 'row', height: 50, marginVertical: 5 }}>
    <TouchableOpacity
      style={{
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: 'center',
      }}>
      <Image
        source={icons.nearby}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '70%',
          height: '100%',
          backgroundColor: COLORS.lightGray3,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
        }}>
        <Text style={{ ...FONTS.h3 }}>{location}</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center',
      }}>
      <Image
        source={icons.basket}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
  </View>
);

export default HomeHeader;
