import React from "react";
import { ScrollView, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import restaurantMenus from "@/constants/menus";
import ThumbnailItem from "@/components/ThumbnailItem";



const MenuPage = () => {
  const { id } = useLocalSearchParams<{ id: "1" | "2" | "3" | "4" }>();
  const menuItems = restaurantMenus[id] || [];

  return (
    <ScrollView className="flex bg-white p-4 mb-20">
      {menuItems.length > 0 ? (
        menuItems.map((item) => (
          <ThumbnailItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))
      ) : (
        <>
          <Text className="text-gray-500">Nenhum item no menu.</Text>
        </>
      )}
    </ScrollView>
  );
};

export default MenuPage;
