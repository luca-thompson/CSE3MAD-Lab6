//index.tsx
import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

export default function App() {
  const polylineCoordinates = [
    { latitude: 144.9943405198507, longitude: -122.4194 },
    { latitude: 34.0522, longitude: -37.75518459905684 },
    { latitude: 32.7157, longitude: -117.1611 },
  ];


  return (
    <MapView style={{ flex: 1 }}>
      <Polyline
        coordinates={polylineCoordinates}
        strokeColor="#FF0000"
        strokeWidth={10}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
