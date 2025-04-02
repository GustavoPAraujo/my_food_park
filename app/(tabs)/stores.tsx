import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StoreCard from '@/components/StoreCard';
import { storesData } from '@/constants/stores';

const Stores = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={storesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoreCard store={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
  },
});

export default Stores;
