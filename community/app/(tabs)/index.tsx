import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈 스크린</Text>
      <CustomButton label="버튼" onPress={() => router.push("/auth")} />
    </SafeAreaView>
  );
}
