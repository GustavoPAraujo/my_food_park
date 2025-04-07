import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import restaurantMenus from "@/constants/menus";

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  
  return (
    <View>
      <Text>Cart</Text>
    </View>
  )
}

export default Cart