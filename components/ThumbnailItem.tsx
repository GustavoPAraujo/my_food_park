import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';

interface ThumbnailItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
}


const imageMap: Record<string, any> = {
  "@/assets/images/menu/burguermania/classic.png": require('@/assets/images/menu/burguermania/classic.png'),
  "@/assets/images/menu/burguermania/bacon.png": require('@/assets/images/menu/burguermania/bacon.png'),
  "@/assets/images/menu/burguermania/veggie.png": require('@/assets/images/menu/burguermania/veggie.png'),
};




const ThumbnailItem: React.FC<ThumbnailItemProps> = ({ id, name, price, image }) => {
  const resolvedImage = imageMap[image];

  return (
    <Link href={{ pathname: "/menu/item/[id]", params: { id } }} asChild>
      <TouchableOpacity className="flex flex-row p-3 bg-slate-200 rounded-lg shadow-md mb-6">

        {resolvedImage && (
          <Image
            source={resolvedImage}
            className="w-40 h-40 rounded-lg mr-3"
            resizeMode="cover"
          />
        )}
        <View className='w-52'>
          <Text className="text-2xl font-bold break-words whitespace-normal">{name}</Text>
          <Text className="text-gray-700 text-lg">R$ {price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
    </Link>

  );
};

export default ThumbnailItem;
