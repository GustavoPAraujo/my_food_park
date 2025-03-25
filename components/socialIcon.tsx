import { TouchableOpacity, Text } from 'react-native';

interface SocialIconProps {
  name: string;
}

const SocialIcon = ({ name }: SocialIconProps) => {
  return (
    <TouchableOpacity
      onPress={() => alert(`Abrindo ${name}...`)}
      className='bg-red-600 px-4 py-2 rounded-full'
    >
      <Text className='text-white'>{name}</Text>
    </TouchableOpacity>
  );
}

export default SocialIcon;
