import React from "react";
import { View, Text, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import restaurantMenus from "@/constants/menus";
import AsyncStorage from "@react-native-async-storage/async-storage";

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


  const handleAddToCart = async () => {
    try {

      const cartJSON = await AsyncStorage.getItem("cart");
      let cart = cartJSON ? JSON.parse(cartJSON) : [];


      const index = cart.findIndex((cartItem: any) => cartItem.id === item?.id);
      if (index !== -1) {

        cart[index].quantity += 1;
      } else {

        cart.push({ ...item, quantity: 1 });
      }

      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      console.log("Item adicionado ao carrinho:", cart);
    } catch (error) {
      console.error("Erro ao adicionar item ao carrinho:", error);
    }
  };


  if (!item) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Item não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      className="flex bg-white p-4"
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Image
        source={imageMap[item.image]}
        className="w-full h-80 rounded-lg mb-4"
        resizeMode="cover"
      />
      <Text className="text-2xl font-bold mb-2">{item.name}</Text>
      <Text className="text-md text-gray-600 mb-2">{item.description}</Text>
      <Text className="text-lg font-semibold mb-2">Preço: R$ {item.price.toFixed(2)}</Text>
      <Text className="text-lg font-semibold mb-2">
        {("peso" in item.quantity && `Peso: ${item.quantity.peso}`) ||
          ("diametro" in item.quantity && `Diâmetro: ${item.quantity.diametro}`) ||
          ("unidades" in item.quantity && `Unidades: ${item.quantity.unidades}`)}
      </Text>


      <Text className="text-xl font-bold mb-1">Ingredientes:</Text>
      {item.ingredients.map((ingredient, index) => (
        <Text key={index} className="text-gray-600">- {ingredient}</Text>
      ))}


      <TouchableOpacity 
        className="bg-red-600 flex justify-center items-center h-16 mt-6 rounded-lg "
        onPress={handleAddToCart}
      >
        <Text className="text-white font-bold text-lg">Adicionar ao carrinho</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

export default ItemDetails;
