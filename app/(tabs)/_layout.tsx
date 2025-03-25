
import { Tabs } from "expo-router";
import React from "react";
import { View, ImageBackground, Image, Text } from "react-native"

import { icons } from "@/constants/icons"

const TabIcon = ({ focused, icon, title }: any) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image 
        source={icon} 
        style={{ width: 24, height: 24, tintColor: focused ? "#000" : "#aaa" }} 
      />
      {focused && (
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600", marginTop: 4 }}>
          {title}
        </Text>
      )}
    </View>
  );
};

const _Layout = () => {

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        },
        tabBarStyle: {
          backgroundColor: '#',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 56,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0F0D23'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon  
              focused={focused} 
              icon={icons.home}
            title=""  
            />
          )

        }}
      />
      <Tabs.Screen
        name="stores"
        options={{
          title: 'Stores',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          headerShown: false,
        }}
      />

    </Tabs>
  )
}

export default _Layout