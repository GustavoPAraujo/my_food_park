import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import EventCard from '@/components/EventCard';
import Events from '@/constants/events';

interface Event {
  id: string;
  day: string;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {

    setEvents(Events);
  }, []);


  const daysOrder: { [key: string]: number } = {
    'Segunda-feira': 1,
    'Terça-feira': 2,
    'Quarta-feira': 3,
    'Quinta-feira': 4,
    'Sexta-feira': 5,
    'Sábado': 6,
    'Domingo': 7
  };

  const sortedEvents = [...events].sort(
    (a, b) => daysOrder[a.day] - daysOrder[b.day]
  );

  return (
    <View className="flex-1 p-4 bg-red-400 pb-24">
      <Text className="text-xl font-bold mb-4">Programação Semanal</Text>
      <FlatList
        data={sortedEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  );
}
