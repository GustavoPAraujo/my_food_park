import { Tabs } from "expo-router";
import React from "react";
import { View, ImageBackground, Image, Text, TouchableOpacity } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-20 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#f00" className="size-5" />
        <Text className="text-base font-semibold ml-2">{title}</Text>
      </ImageBackground>
    );
  }
  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#a9a9a9" className="size-5" />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 32,
          height: 56,
          position: "absolute",
          overflow: "hidden",
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "inicio",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <TabIcon focused={focused} icon={icons.home} title="Início" />
          ),
        }}
      />
      <Tabs.Screen
        name="stores"
        options={{
          title: "Stores",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <TabIcon focused={focused} icon={icons.search} title="Lojas" />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <TabIcon focused={focused} icon={icons.music} title="Eventos" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <TabIcon focused={focused} icon={icons.shoppingCart} title="Carrinho" />
          ),
        }}
      />
      
      <Tabs.Screen name="item/[id]" options={{ tabBarButton: () => null }} />
      <Tabs.Screen name="menu/[id]" options={{ tabBarButton: () => null }} />
      <Tabs.Screen name="store/[id]" options={{ tabBarButton: () => null }} />
    </Tabs>
  );
};

function CustomTabBar({ state, descriptors, navigation }: any) {
  const visibleRoutes = state.routes.filter((route: any) =>
    !["item/[id]", "menu/[id]", "store/[id]"].includes(route.name)
  );

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fa9a93",
        borderRadius: 50,
        marginHorizontal: 12,
        marginBottom: 30,
        height: 60,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      {visibleRoutes.map((route: any) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === state.routes.indexOf(route);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({ focused: isFocused, size: 24, color: isFocused ? "#f00" : "#a9a9a9" })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default _Layout;
