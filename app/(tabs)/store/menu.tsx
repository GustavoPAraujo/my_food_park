import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';
import { menuData } from './menuData';

const MenuPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
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
