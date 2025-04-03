import { StyleSheet, View } from 'react-native'
import React from 'react'
import MapView, { Marker, Callout } from "react-native-maps"


const coordinate = {
  latitude: -27.59948942350316,
  longitude: -48.51859914120166,
}

const Map = () => {
  return (
    <View>

      <View className=' flex items-center  h-60 '>
        <MapView
          style={[StyleSheet.absoluteFill]}
          className='h-50% w-50%'
          initialRegion={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
        >
          <Marker
            coordinate={coordinate}
          >
            <Callout style={styles.callout} >
            </Callout>
          </Marker>
        </MapView >

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  callout: {
    width: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  address: {
    fontSize: 14,
  }
})

export default Map