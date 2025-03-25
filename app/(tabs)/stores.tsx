import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Map from "react-native-maps"

const Stores = () => {
  return (
    <View className='flex-1'>

      <Map 
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: -27.5994,
          longitude: -48.51863,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}  
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Stores