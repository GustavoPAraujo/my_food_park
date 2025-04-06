import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import "./global.css"

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  );
}
