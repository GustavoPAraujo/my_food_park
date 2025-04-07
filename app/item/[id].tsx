import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import restaurantMenus from "@/constants/menus";

const imageMap: Record<string, any> = {
  "@/assets/images/menu/burguermania/classic.png": require('@/assets/images/menu/burguermania/classic.png'),
  "@/assets/images/menu/burguermania/bacon.png": require('@/assets/images/menu/burguermania/bacon.png'),
  "@/assets/images/menu/burguermania/veggie.png": require('@/assets/images/menu/burguermania/veggie.png'),

  "@/assets/images/menu/cantinabella/carbonara.png": require("@/assets/images/menu/cantinabella/carbonara.png"),
  "@/assets/images/menu/cantinabella/margherita.png": require("@/assets/images/menu/cantinabella/margherita.png"),
  "@/assets/images/menu/cantinabella/lasagna.png": require("@/assets/images/menu/cantinabella/lasagna.png"),

  "@/assets/images/menu/sushihouse/platter.png": require("@/assets/images/menu/sushihouse/platter.png"),
  "@/assets/images/menu/sushihouse/tuna.png": require("@/assets/images/menu/sushihouse/tuna.png"),
  "@/assets/images/menu/sushihouse/roll.png": require("@/assets/images/menu/sushihouse/roll.png"),

  "@/assets/images/menu/docesecia/lavacake.png": require("@/assets/images/menu/docesecia/lavacake.png"),
  "@/assets/images/menu/docesecia/redvelvet.png": require("@/assets/images/menu/docesecia/redvelvet.png"),
  "@/assets/images/menu/docesecia/tiramisu.png": require("@/assets/images/menu/docesecia/tiramisu.png"),

  "@/assets/images/menu/pizzamania/pepperoni.png": require("@/assets/images/menu/pizzamania/pepperoni.png"),
  "@/assets/images/menu/pizzamania/cheese.png": require("@/assets/images/menu/pizzamania/cheese.png"),
  "@/assets/images/menu/pizzamania/vegetarian.png": require("@/assets/images/menu/pizzamania/vegetarian.png"),
};

const ItemDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const menuItems = Object.values(restaurantMenus).flat();
  const item = menuItems.find((menuItem) => menuItem.id === id);


  if (!item) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Item não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex bg-white p-4">
      <Image
        source={imageMap[item.image]}
        className="w-full h-80 rounded-lg mb-4"
        resizeMode="cover"
      />
      <Text className="text-2xl font-bold mb-2">{item.name}</Text>
      <Text className="text-md text-gray-600 mb-2">{item.description}</Text>
      <Text className="text-lg font-semibold mb-2">Preço: R$ {item.price.toFixed(2)}</Text>
      <Text className="text-lg font-semibold mb-2">Quantidade: </Text>
      <Text className="text-xl font-bold mb-2">Ingredientes:</Text>
      {item.ingredients.map((ingredient, index) => (
        <Text key={index} className="text-gray-600">{ingredient}</Text>
      ))}
    </ScrollView>
  );
};

export default ItemDetails;
