import { Stack } from "expo-router";
import { Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerLeft: () => (
            <Image
              source={{
                uri: "https://imgs.search.brave.com/1ljiQZ_mKeHYMe5aV_JnHzqHXOjuPJLlGVQjyUS-0KI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wMTYt/cHUtc2lnbi11c2Vh/c3Q4LnRpa3Rva2Nk/bi11cy5jb20vdG9z/LXVzZWFzdDUtcC0w/MDY4LXR4L29BT1ho/Y2dsZkFFVVNFYVBB/QlJvUW1CMDRpRFNp/RUlZV2ZTSTE1fnRw/bHYtdGlrdG9reC1v/cmlnaW4uaW1hZ2U_/ZHI9OTYzNiZ4LWV4/cGlyZXM9MTc1NTUx/NDgwMCZ4LXNpZ25h/dHVyZT0zaE9WT1dJ/WUFWOU9GN3BDU1JF/NmhhNEZXNVE9JnQ9/NGQ1YjA0NzQmcHM9/MTM3NDA2MTAmc2hw/PTgxZjg4YjcwJnNo/Y3A9NDNmNGEyZjkm/aWRjPXVzZWFzdDg",
              }}
              style={{ width: 30, height: 30, borderRadius: 20 }}
            />
          ),
          headerTitle: () => (
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                lineHeight: 28,
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              Th|nk
            </Text>
          ),
        }}
      />
      <Stack.Screen name="user/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
