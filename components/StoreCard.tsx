import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Store {
  id: string;
  name: string;
  banner: string;
  photos: string[];
  description: string;
  phone: string;
  whatsapp: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  email: string;
  deliveryLink: string;
  menuLink: string;
}

interface StoreCardProps {
  store: Store;
}

const imageMap: Record<string, any> = {
  "@/assets/images/stores/burguermania.png": require("@/assets/images/stores/burguermania.png"),
  "@/assets/images/stores/cantinabella.png": require("@/assets/images/stores/cantinabella.png"),
  "@/assets/images/stores/sushihouse.png": require("@/assets/images/stores/sushihouse.png"),
  "@/assets/images/stores/docesecia.png": require("@/assets/images/stores/docesecia.png"),
  "@/assets/images/stores/pizzamania.png": require("@/assets/images/stores/pizzamania.png"),
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const imageSource = imageMap[store.banner] || { uri: store.banner };

  return (
    <TouchableOpacity className='bg-white rounded-lg shadow-xl mb-4 overflow-hidden'>
      <Image source={imageSource} style={{ width: '100%', height: 200 }} resizeMode="cover" />
      <View className="p-3">
        <Text className="text-lg font-bold">{store.name}</Text>
        <Text className="mt-1 text-sm text-gray-500" numberOfLines={2}>
          {store.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoreCard;
