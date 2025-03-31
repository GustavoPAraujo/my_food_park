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
  event1: require('@/assets/images/events/event1.png'),
  event2: require('@/assets/images/events/event2.png'),

};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <View className="mb-6 p-4 bg-white rounded shadow">
      <Text className="text-xl font-bold">{event.day}</Text>
      <Text className="text-lg font-semibold mt-2">{event.title}</Text>
      <Text className="mt-2">{event.description}</Text>
      <Image
        source={imageMap[event.image]}
        style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 8 }}
        resizeMode="cover"
      />
    </View>
  );
};

export default EventCard;
