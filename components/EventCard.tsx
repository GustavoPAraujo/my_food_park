import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

interface Event {
  id: string;
  day: string;
  title: string;
  description: string;
  image: string;
  video?: string;
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
    <TouchableOpacity onPress={() => {
                                    setShowVideo(true); console.log(showVideo)
                                    }}>

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
      {event.video && showVideo && (
        <Video
          source={{ uri: "https://www.youtube.com/watch?v=jft3BVoxqjo"}}
          style={{ width: '100%', height: 200 }}
          controls
          resizeMode="cover"
        />
      )}

    </TouchableOpacity>
  );
};

export default EventCard;
