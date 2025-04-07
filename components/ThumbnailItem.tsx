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

  "@/assets/images/menu/cantinabella/carbonara.png": require("@/assets/images/menu/cantinabella/carbonara.png"),
  "@/assets/images/menu/cantinabella/margherita.png": require("@/assets/images/menu/cantinabella/margherita.png"),
  "@/assets/images/menu/cantinabella/lasagna.png": require("@/assets/images/menu/cantinabella/lasagna.png"),

  "@/assets/images/menu/sushihouse/platter.png": require("@/assets/images/menu/sushihouse/platter.png"),
  "@/assets/images/menu/sushihouse/tuna.png": require("@/assets/images/menu/sushihouse/tuna.png"),
  "@/assets/images/menu/sushihouse/roll.png": require("@/assets/images/menu/sushihouse/roll.png"),

  "@/assets/images/menu/docesecia/lavacake.png": require("@/assets/images/menu/docesecia/lavacake.png"),
  "@/assets/images/menu/docesecia/redvelvet.png": require("@/assets/images/menu/docesecia/redvelvet.png"),
  "@/assets/images/menu/docesecia/tiramisu.png": require("@/assets/images/menu/docesecia/tiramisu.png"),

  "@/assets/images/menu/pizzamania/pepperoni.png": require("@/assets/images/menu/pizzamania/pepperoni.png"),
  "@/assets/images/menu/pizzamania/cheese.png": require("@/assets/images/menu/pizzamania/cheese.png"),
  "@/assets/images/menu/pizzamania/vegetarian.png": require("@/assets/images/menu/pizzamania/vegetarian.png"),


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
