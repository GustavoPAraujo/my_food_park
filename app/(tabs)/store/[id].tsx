import React from 'react';
import { View, Text, Image, ScrollView, Button, Linking, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { storesData } from '@/constants/stores';
import { SocialIcon } from 'react-native-elements';
import { openURL } from '@/components/SocialButtonsUrl';
import { useNavigation } from '@react-navigation/native';


const StorePage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();


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
      <View className='flex justify-center items-center' >
        <Text>Loja não encontrada.</Text>
      </View>
    );
  }

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <>
      <TouchableOpacity
        className='absolute  top-3 left-3 bg-white p-1.5 rounded-md z-50'
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text className='text-black'>Voltar</Text>
      </TouchableOpacity>
      <ScrollView className='flex bg-white' >
        <Image
          source={bannerMap[store.banner]}
          className="w-full h-60"
          resizeMode="cover"
        />

        <View className='px-5 pt-3'>
          <Text className='text-2xl font-bold' >{store.name}</Text>
          <Text className='mt-2 text-lg text-gray-500' >
            {store.description}
          </Text>
        </View>

        <View className='px-5 pt-3'>
          <Text className='text-xl font-bold mb-2'>Fotos</Text>
          <ScrollView horizontal>
            {store.photos.map((photo, index) => (
              <Image
                key={index}
                source={photo}
                className='w-40 h-40 rounded-lg mr-4'
              />
            ))}
          </ScrollView>
        </View>

        <View className="px-5 pt-8 flex flex-row gap-2 space-x-8 justify-around">
          <TouchableOpacity
            className="flex-1 bg-blue-500 py-3 rounded-lg items-center"
            onPress={() => openLink(store.deliveryLink)}
          >
            <Text className="text-white text-lg font-bold">Delivery App</Text>
          </TouchableOpacity>

          <Link href={{ pathname: "/menu/[id]", params: { id: store.id } }} asChild>
            <TouchableOpacity
              className="flex-1 bg-red-500 py-3 rounded-lg items-center"
            >
              <Text className="text-white text-lg font-bold">Ver Menu</Text>
            </TouchableOpacity>
          </Link>

        </View>

        <View className='px-5 pt-3'>
          <Text className='text-xl font-bold mb-1' >Contato</Text>
          <Text>Telefone: {store.phone}</Text>
          <Text>WhatsApp: {store.whatsapp}</Text>
          <Text>Email: {store.email}</Text>
        </View>

        <View className='px-5 pt-3 flex-row justify-between'>
          <SocialIcon
            type="instagram"
            onPress={() => openURL(store.social.instagram)}
          />
          <SocialIcon
            type="facebook"
            onPress={() => openURL(store.social.facebook)}
          />
          <SocialIcon
            type="twitter"
            onPress={() => openURL(store.social.twitter)}
          />
          <SocialIcon
            type="whatsapp"
            onPress={() => openURL(store.whatsapp)}
          />
        </View>

      </ScrollView>
    </>
  );
};

export default StorePage;
