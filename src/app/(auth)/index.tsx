import Button from "@/components/ui/button";
import { useAuth } from "@clerk/clerk-expo";
import { View, Text } from "react-native";

export default function Home() {
  const { signOut } = useAuth();
  return (
    <View className="flex justify-center items-center h-screen gap-16">
      <Text className="text-black">Logado, termos LGPD</Text>
      <Button icon="exit" onPress={() => signOut() }>Sair</Button>
    </View>
  );
}
