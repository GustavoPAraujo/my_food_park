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

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: store.banner }} style={styles.banner} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.name}>{store.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {store.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginBottom: 16,
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    height: 150,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});

export default StoreCard;
