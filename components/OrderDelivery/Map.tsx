import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { COLORS, icons } from '../../constants';
import { CurrentLocation, Location, Restaurant } from '../../types';

const Map: React.FC<{
  restaurant: Restaurant;
  currentLocation: CurrentLocation;
}> = ({ currentLocation, restaurant }) => {
  const [streenName, setStreenName] = useState('');
  const [region, setRegion] = useState<any>(null);
  const [toLocation, settoLocation] = useState<Location | null>(null);
  const [FromLocation, setFromLocation] = useState<Location | null>(null);

  useEffect(() => {
    const { gps, streetName } = currentLocation;
    const { longitude: toLocLong, latitude: toLocLat } = restaurant.location;
    let mapRegion = {
      latitude: (gps.latitude + toLocLat) / 2,
      longitude: (gps.longitude + toLocLong) / 2,
      latitudeDelta: Math.abs(gps.latitude - toLocLat) * 2,
      longitudeDelta: Math.abs(gps.longitude - toLocLong) * 2,
    };
    setStreenName(streetName);
    setFromLocation(gps);
    settoLocation(restaurant.location);
    setRegion(mapRegion);
  }, []);
  const MarkerPin = () =>
    toLocation && (
      <Marker coordinate={toLocation}>
        <View
          style={{
            height: 40,
            width: 40,
            borderWidth: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: COLORS.white,
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderWidth: 15,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: COLORS.primary,
            }}>
            <Image
              source={icons.pin}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </View>
        </View>
      </Marker>
    );
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={region}>
        <MarkerPin />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
