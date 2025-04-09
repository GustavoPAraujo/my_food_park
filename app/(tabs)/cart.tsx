import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

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

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const loadCart = async () => {
    try {
      const cartJSON = await AsyncStorage.getItem("cart");
      const cart = cartJSON ? JSON.parse(cartJSON) : [];
      setCartItems(cart);
    } catch (error) {
      console.error("Erro ao carregar o carrinho:", error);
    }
  };

  const updateQuantity = async (id: string, newQuantity: number) => {
    let updatedCart;
    if (newQuantity <= 0) {
      updatedCart = cartItems.filter((item) => item.id !== id);
    } else {
      updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    }
    setCartItems(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = async (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Executa loadCart() sempre que a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      loadCart();
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 100 }}>
      <Text className="text-2xl font-bold mt-4 mb-4">Carrinho de Compras</Text>
      <Text className="text-xl font-bold mb-4">
        Total: R$ {calculateTotal().toFixed(2)}
      </Text>
      {cartItems.length === 0 ? (
        <Text className="text-gray-500">Carrinho vazio.</Text>
      ) : (
        cartItems.map((item) => (
          <View key={item.id} className="mb-4 p-4 border rounded flex flex-row">
            <View>
              <Image
                source={imageMap[item.image]}
                className="w-40 h-40 rounded-lg mr-4"
                resizeMode="cover"
              />
            </View>
            <View className="w-40 flex justify-between">
              <View>
                <Text className="text-lg font-bold break-words whitespace-normal">{item.name}</Text>
                <Text className="text-gray-600">Preço: R$ {item.price.toFixed(2)}</Text>
                <Text className="text-gray-600">Quantidade: {item.quantity}</Text>
              </View>
              <View className="flex flex-row gap-2 mt-2">
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-300 p-2 rounded"
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-300 p-2 rounded"
                >
                  <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => removeItem(item.id)}
                  className="bg-red-500 p-2 rounded"
                >
                  <Text className="text-white">Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default CartPage;
