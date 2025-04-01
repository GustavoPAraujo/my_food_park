import React from 'react';
import { View, Text, Image } from 'react-native';

interface Event {
  id: string;
  day: string;
  title: string;
  description: string;
  image: string;
}

interface EventCardProps {
  event: Event;
}

const imageMap: Record<string, any> = {
  '@/assets/images/events/event1.png': require('@/assets/images/events/event1.png'),
  '@/assets/images/events/event2.png': require('@/assets/images/events/event2.png'),
  '@/assets/images/events/event3.png': require('@/assets/images/events/event3.png'),
  '@/assets/images/events/event4.png': require('@/assets/images/events/event4.png'),
  '@/assets/images/events/event5.png': require('@/assets/images/events/event5.png'),
  '@/assets/images/events/event6.png': require('@/assets/images/events/event6.png'),
  '@/assets/images/events/event7.png': require('@/assets/images/events/event7.png'),
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const imageSource = imageMap[event.image] || { uri: event.image };

  return (
    <View className="mb-6 p-4 bg-white rounded shadow">
      <Text className="text-xl font-bold">{event.day}</Text>
      <Text className="text-lg font-semibold mt-2">{event.title}</Text>
      <Text className="mt-2">{event.description}</Text>
      <Image
        source={imageSource}
        style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 8 }}
        resizeMode="cover"
      />
    </View>
  );
};

export default EventCard;
