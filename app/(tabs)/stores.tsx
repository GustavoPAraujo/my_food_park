import React from 'react';
import { View, FlatList } from 'react-native';
import StoreCard from '@/components/StoreCard';
import { storesData } from '@/constants/stores';

const Stores = () => {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={storesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoreCard store={item} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default Stores;
