import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

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
  "burguermania.png": require("@/assets/images/stores/burguermania.png"),
  "cantinabella.png": require("@/assets/images/stores/cantinabella.png"),
  "sushihouse.png": require("@/assets/images/stores/sushihouse.png"),
  "docesecia.png": require("@/assets/images/stores/docesecia.png"),
  "pizzamania.png": require("@/assets/images/stores/pizzamania.png"),
};

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const storeId = store.id.toString(); 

  return (
<Link
  href={{
    pathname: '/store/[id]',
    params: { id: storeId },
  }}
  asChild
>
      <TouchableOpacity className="bg-white rounded-lg shadow-xl shadow-slate-600 mb-4 overflow-hidden">
        <Image
          source={imageMap[store.banner] || { uri: store.banner }}
          className="w-full h-60"
          resizeMode="cover"
        />
        <View className="bg-slate-200 px-2 pb-2">
          <Text className="text-lg font-bold">{store.name}</Text>
          <Text className="mt-1 text-gray-500" numberOfLines={2}>
            {store.description}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default StoreCard;
