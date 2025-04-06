import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


interface Event {
  id: string;
  day: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
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
  const [showVideo, setShowVideo] = useState(false);
  const imageSource = imageMap[event.image] || { uri: event.image };

  return (
    <TouchableOpacity onPress={() => { setShowVideo(true) }}>

      <View className="p-4 bg-white rounded-t-xl shadow-lg">
        <Text className="text-3xl font-bold text-red-600">{event.day}</Text>
        <Text className="text-xl font-semibold mt-2">{event.title}</Text>
        <Text className="mt-2">{event.description}</Text>
      </View>
      <Image
        source={imageSource}
        className="w-full h-60 mb-4"
        resizeMode="cover"
      />

      {event.videoUrl && showVideo && (
        <>
          <TouchableOpacity onPress={() => setShowVideo(false)} className="items-end pr-4 mb-2">
            <Text className="font-bold text-red-600 bg-white p-2 inline-block">Fechar</Text>
          </TouchableOpacity>
  
          <View className="w-full h-56 mb-4">
            <WebView
              source={{ uri: event.videoUrl }}
              style={{ flex: 1 }}
            />
          </View>

        </>
      )}

    </TouchableOpacity>
  );
};

export default EventCard;
