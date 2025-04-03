import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MenuItem from '@/components/MenuItem';
import menuData from '@/constants/menus';

const MenuPage = () => {
  const flatMenuData = Object.values(menuData).flat();

  return (
    <View style={styles.container}>
      <FlatList
        data={flatMenuData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItem item={item} />}
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

export default MenuPage;
