
import { Tabs } from "expo-router";
import React from "react";
import { View, ImageBackground, Image, Text } from "react-native"

import { icons } from "@/constants/icons"
import { images } from "@/constants/images";

const TabIcon = ({ focused, icon, title }: any) => {

  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-20 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#f00" className='size-5' />
        <Text className="text-base font-semibold ml-2">{title}</Text>

      </ImageBackground>
    )
  }

  return (
    <View className='size-full justify-center items-center mt-4 rounded-full'>
      <Image source={icon} tintColor="#a9a9a9" className='size-5' />
    </View>
  )
}

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
        backgroundColor: '#fff',
        borderRadius: 50,
        marginHorizontal: 10,
        marginBottom: 32,
        height: 56,
        position: 'absolute',
        overflow: 'hidden',
      }
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'inicio',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title="Início"
            />
          )
        }}
      />
      <Tabs.Screen
        name="stores"
        options={{
          title: 'Stores',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
              title="Lojas"
            />
          )
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.music}
              title="Eventos"
            />
          )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.shoppingCart}
              title="Carrinho"
            />
          )
        }}
      />

    </Tabs>
  )
}

export default _Layout
