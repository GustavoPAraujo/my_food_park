import React from 'react';
import { View, Text, Image, ScrollView, Button, Linking } from 'react-native';

const StorePage = ({ route }:any) => {
  const { store } = route.params; 

  const openLink = (url: any) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Banner */}
      <Image
        source={{ uri: store.banner }}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      />

      {/* Store Name and Description */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{store.name}</Text>
        <Text style={{ marginTop: 8, fontSize: 16, color: '#666' }}>
          {store.description}
        </Text>
      </View>

      {/* Photos */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
          Photos
        </Text>
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

      {/* Contact Information */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
          Contact
        </Text>
        <Text>Phone: {store.phone}</Text>
        <Text>WhatsApp: {store.whatsapp}</Text>
        <Text>Email: {store.email}</Text>
        <Text
          style={{ color: 'blue' }}
          onPress={() => openLink(store.social.facebook)}
        >
          Facebook
        </Text>
        <Text
          style={{ color: 'blue' }}
          onPress={() => openLink(store.social.instagram)}
        >
          Instagram
        </Text>
        <Text
          style={{ color: 'blue' }}
          onPress={() => openLink(store.social.twitter)}
        >
          Twitter
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={{ padding: 16 }}>
        <Button
          title="Open Delivery App"
          onPress={() => openLink(store.deliveryLink)}
        />
        <Button
          title="View Menu"
          onPress={() => openLink(store.menuLink)}
          color="#f4511e"
        />
      </View>
    </ScrollView>
  );
};

export default StorePage;
