import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import restaurantMenus from "@/constants/menus";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  quantity: { weight: string };
}

const MenuPage = () => {
  const { id } = useLocalSearchParams<{ id: "1" | "2" | "3" | "4" }>();
  const menuItems = restaurantMenus[id] || [];

  return (
    <ScrollView className="flex bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Menu</Text>
      {menuItems.length > 0 ? (
        menuItems.map((item) => (
          <View key={item.id} className="mb-4">
            <Image
              source={{ uri: item.image }}
              className="w-full h-40 rounded-lg mb-2"
            />
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-gray-500">{item.description}</Text>
            <Text className="text-lg font-bold mt-2">R$ {item.price}</Text>
          </View>
        ))
      ) : (
        <Text className="text-gray-500">Nenhum item no menu.</Text>
      )}
    </ScrollView>
  );
};

export default MenuPage;
