import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  return (
    <View className="w-full h-80 rounded-lg overflow-hidden shadow-md">
      <MapView
        className="w-full h-full"
        initialRegion={{
          latitude: -27.5994,
          longitude: -48.51863,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: -27.5994, longitude: -48.51863 }}
          title="Embarca Food"
          description="Trindade, Florianópolis, SC"
        />
      </MapView>
    </View>
  );
}
