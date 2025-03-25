import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import SocialIcon from '@/components/socialIcon'
import Map from "@/components/Map";


export default function Index() {
  return (
    <View className='flex-1 items-center'>

      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}>
        <Image source={images.logoSemFundo} className='h-60 w-60' />


        <View className="p-4 bg-white">

          <Text className="text-red-600 text-2xl font-bold text-center mb-2">
            Bem-vindo ao Embarca Food
          </Text>
          <Text className="text-black text-base text-center mb-4">
            Um espaço gastronômico inovador que reúne sabores incríveis, cultura e entretenimento em um só lugar!
            Inspirado na modernidade dos sistemas móveis e embarcados, o nosso food park foi projetado para oferecer praticidade
            e uma experiência única para todos os visitantes.
          </Text>

          <View className='p-4 mb-3 bg-red-600 rounded-lg shadow-xl'>
            <Text className="text-white text-2xl font-semibold text-center mb-2">
              Sabores para todos os gostos
            </Text>
            <Text className="text-white text-base text-center mb-4 ">
              Com uma ampla variedade de lojas de alimentação e bebidas, o Embarca Food traz desde opções clássicas até pratos contemporâneos,
              garantindo que cada cliente encontre algo especial para saborear. Além disso, nosso espaço conta com um ambiente aconchegante e bem estruturado,
              perfeito para reunir amigos, família e colegas de trabalho.
            </Text>
          </View>

          <Text className="text-red-600 text-2xl font-semibold text-center mb-2">
            Muito mais que gastronomia
          </Text>
          <Text className="text-black text-base text-center">
            Mas o Embarca Food vai além da gastronomia! Nossa programação semanal inclui apresentações musicais, shows de stand-up,
            atividades recreativas para crianças e muito mais. Tudo pensado para tornar sua visita uma experiência completa e inesquecível.
          </Text>
        </View>


        <View className='flex-1 flex-row gap-2 mt-10'>
          <SocialIcon name="Instagram" />
          <SocialIcon name="Twitter" />
          <SocialIcon name="WhatsApp" />
        </View>

        <View className='mt-10 px-6 mb-28'>


          <Text className='text-lg font-bold'>Endereço</Text>
          <Text className='text-sm text-gray-600 mt-2'>
            R. Delfino Conti - Bairro Trindade, Florainópolis
          </Text>
          <Text className='text-sm text-gray-600 mt-2'>
            Contato: (11) 1234-5678 | enbarcafood@gmail.com
          </Text>
        </View>

        <View className="mt-4">
          <Map />
        </View>

      </ScrollView>


    </View>
  )
}

