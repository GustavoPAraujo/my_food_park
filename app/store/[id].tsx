import React from 'react';
import { View, Text, Image, ScrollView, Button, Linking } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { storesData } from '@/constants/stores'; 

const StorePage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const store = storesData.find((s) => s.id === id);

  const bannerMap: Record<string, any> = {
    "burguermania.png": require("@/assets/images/stores/burguermania.png"),
    "cantinabella.png": require("@/assets/images/stores/cantinabella.png"),
    "sushihouse.png": require("@/assets/images/stores/sushihouse.png"),
    "docesecia.png": require("@/assets/images/stores/docesecia.png"),
    "pizzamania.png": require("@/assets/images/stores/pizzamania.png"),
  };

  if (!store) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loja não encontrada.</Text>
      </View>
    );
  }

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Banner */}
      <Image
        source={bannerMap[store.banner]}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      />

      {/* Nome e Descrição */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{store.name}</Text>
        <Text style={{ marginTop: 8, fontSize: 16, color: '#666' }}>
          {store.description}
        </Text>
      </View>

      {/* Fotos */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Fotos</Text>
        <ScrollView horizontal>
          {store.photos.map((photo, index) => (
            <Image
              key={index}
              source={{ uri: photo }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginRight: 8,
              }}
            />
          ))}
        </ScrollView>
      </View>

      {/* Contato */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Contato</Text>
        <Text>Telefone: {store.phone}</Text>
        <Text>WhatsApp: {store.whatsapp}</Text>
        <Text>Email: {store.email}</Text>

        <Text style={{ color: 'blue' }} onPress={() => openLink(store.social.instagram)}>
          Instagram
        </Text>

      </View>

      {/* Botões de Ação */}
      <View style={{ padding: 16 }}>
        <Button title="Open Delivery App" onPress={() => openLink(store.deliveryLink)} />
        <Button title="View Menu" onPress={() => openLink(store.menuLink)} color="#f4511e" />
      </View>
    </ScrollView>
  );
};

export default StorePage;
