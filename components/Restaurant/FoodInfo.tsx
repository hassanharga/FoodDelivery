import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Text } from 'react-native-svg';
import { SIZES } from '../../constants';
import { Menu } from '../../types';

const FoodInfo: React.FC<{ menu: Menu[] }> = ({ menu }) => {
  return (
    <View>
      <Text>food info</Text>
    </View>
    // <Animated.ScrollView
    //   horizontal
    //   pagingEnabled
    //   scrollEventThrottle={16}
    //   snapToAlignment="center"
    //   showsHorizontalScrollIndicator={false}
    //   // TODO: add onScroll
    //   //   onScroll
    // >
    //   {menu &&
    //     menu.map((ele, idx) => (
    //       <View key={`menu-${idx}`} style={{ alignItems: 'center' }}>
    //         <View style={{ height: SIZES.height * 0.35 }}>
    //           <Image
    //             source={ele.photo}
    //             style={styles.image}
    //             resizeMode="cover"
    //           />
    //         </View>
    //       </View>
    //     ))}
    // </Animated.ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: SIZES.width,
    height: '100%',
  },
});

export default FoodInfo;
