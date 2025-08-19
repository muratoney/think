import React, { useRef, useState } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import type { NativeSyntheticEvent } from "react-native";
import type { NativeScrollEvent } from "react-native";
import { icons } from "@/constants/icons";

const DATA = [
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5d6",
    user_id: "4",
    username: "tech_tom",
    time: "5m",
    body: "Finally squashed that elusive bug! Spent hours chasing it, but the “it works” feeling made it all worthwhile.",
  },
  {
    id: "d4c3b2a1-6f5e-8b7a-0d9c-2a1f3b4c5d6e",
    user_id: "5",
    username: "meme_mae",
    time: "10m",
    body: "Code compiles on first try. Suspicious.",
  },
  {
    id: "f1e2d3c4-b5a6-7c8d-9e0f-1a2b3c4d5e6f",
    user_id: "6",
    username: "coffee_carl",
    time: "15m",
    body: "Coffee break turned into a deep dive into tech docs and tutorials. Learning never stops, even when you just meant to rest.",
  },
  {
    id: "1f2e3d4c-5b6a-7c8d-9e0f-1a2b3c4d5e6f",
    user_id: "7",
    username: "design_sam",
    time: "20m",
    body: "Minimalist UI = hours aligning pixels.\nWorth it for the clean look though!",
  },
  {
    id: "9a8b7c6d-5e4f-3g2h-1i0j-9k8l7m6n5o4p",
    user_id: "8",
    username: "js_judy",
    time: "25m",
    body: "Arrow functions are a blessing and a curse. One misplaced return, and everything breaks. Classic.",
  },
  {
    id: "0a1b2c3d-4e5f-6g7h-8i9j-0k1l2m3n4o5p",
    user_id: "9",
    username: "native_nerd",
    time: "30m",
    body: "NativeWind is pure styling magic—until Metro refuses to reload and you spend 20 minutes restarting everything. Oof.",
  },
  {
    id: "abcdef12-3456-7890-abcd-ef1234567890",
    user_id: "10",
    username: "logic_luke",
    time: "35m",
    body: "Tried optimizing FlatList performance.\nNow it’s slower than before. Optimization is dark magic, I swear.",
  },
  {
    id: "fedcba98-7654-3210-fedc-ba9876543210",
    user_id: "11",
    username: "react_rachel",
    time: "40m",
    body: "useSafeAreaInsets() saved my layout today.\nFuture me says thanks to past me!",
  },
  {
    id: "11223344-5566-7788-99aa-bbccddeeff00",
    user_id: "12",
    username: "typescript_tim",
    time: "45m",
    body: "Typed myself into a type error—fun times! #developerjoy",
  },
  {
    id: "00ffeedd-ccbb-aabb-8899-776655443322",
    user_id: "13",
    username: "debug_dan",
    time: "50m",
    body: "Console.log: friend or foe? Both at the same time.",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5d7",
    user_id: "14",
    username: "code_claire",
    time: "55m",
    body: "Debugging a semicolon for 30 minutes... turns out it was just a comma! #developerlife",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5d8",
    user_id: "15",
    username: "python_pete",
    time: "1h",
    body: "If at first you don’t succeed, call it version 1.0 and ship it anyway.",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5d9",
    user_id: "16",
    username: "debug_dana",
    time: "1h 5m",
    body: "I don’t always test my code, but when I do, it’s in production. Fingers crossed!",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5da",
    user_id: "17",
    username: "frontend_fred",
    time: "1h 10m",
    body: "CSS is like a box of chocolates. You never know what you’re gonna get — until you open the dev tools.",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5db",
    user_id: "18",
    username: "backend_ben",
    time: "1h 15m",
    body: "Why do programmers prefer dark mode?\nBecause light attracts bugs. 🐞",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5dc",
    user_id: "19",
    username: "dev_danny",
    time: "1h 20m",
    body: "I told my computer I needed a break.\nNow it won’t stop sending me Kit-Kats. 🍫",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5dd",
    user_id: "20",
    username: "git_gary",
    time: "1h 25m",
    body: "Git commit messages should be short, clear, and punchy — like a good joke.",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5de",
    user_id: "21",
    username: "api_anna",
    time: "1h 30m",
    body: "API documentation: written in a language only the author understands. Every. Single. Time.",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5df",
    user_id: "22",
    username: "cloud_chris",
    time: "1h 35m",
    body: "The cloud: where your data is someone else’s problem, until it’s yours again.",
  },
  {
    id: "a1b2c3d4-5e6f-7a8b-9c0d-e1f2a3b4c5e0",
    user_id: "23",
    username: "dev_diana",
    time: "1h 40m",
    body: "I’m not a magician, but I can make your bugs disappear... temporarily.",
  },
];



const SCROLL_THRESHOLD = 10;

type ItemProps = { body: string; user_id: string; time: string };

const PostItem = ({ body, user_id, time }: ItemProps) => (
  <View style={styles.item}>
    <View style={styles.profileContainer}>
      <Image
        source={{
          uri: "https://imgs.search.brave.com/0Tyxjo0wDechJQvlpDKDyJBzMQvmuD9NhenaHpZN3TQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS41Nzg5/MzE0MDQ3LjY1ODYv/cmFmLDM2MHgzNjAs/MDc1LHQsZmFmYWZh/OmNhNDQzZjQ3ODYu/dTEuanBn",
        }}
        style={styles.profileImage}
      />
      <View>
        <Text style={styles.username}>
          {user_id}
          <Text style={styles.time}> {time}</Text>
        </Text>
        <Text style={styles.body}>{body}</Text>
        <Pressable
          style={{
            flexDirection: "row",
            marginTop: 8,
          }}
        >
          <Image
            style={{ marginRight: 2 }}
            source={icons.heart}
            tintColor="#000000"
            className="size-5"
          />
          <Text
            style={{
              fontSize: 13,
              justifyContent: "center",
              alignItems: "center",
              top: 0.5,
            }}
          >
            555
          </Text>
        </Pressable>
      </View>
    </View>
  </View>
);

const App = () => {
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <Animated.FlatList
          // onScroll={handleScroll}
          contentContainerStyle={{ paddingTop: 0 }}
          data={DATA}
          renderItem={({ item }) => (
            <PostItem
              body={item.body}
              user_id={item.username}
              time={item.time}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
// This should help with the header https://www.youtube.com/watch?v=AP08wUBhpKM

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 124, // or your preferred height
    backgroundColor: "#00B8EA",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 10,
    opacity: 100,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 40,
  },
  headerItem: {
    fontSize: 16,
    fontWeight: "600",
  },
  item: {
    backgroundColor: "#fffff",
    marginVertical: 8,
    marginHorizontal: 24,
    borderColor: "#d5d5d5",
    borderBottomWidth: 0.5,
  },
  body: {
    fontSize: 16,
    marginRight: 55,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: "#7f7f7f",
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
});

export default App;



// Placeholder


// TOP BAR FILTER
/* <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 100,
              marginBottom: 8,
            }}
          >
            <Pressable>
              <Text style={[styles.headerItem]}>Local</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.headerItem}>Following</Text>
            </Pressable>
          </View> */

// Top bar
 {/* <Animated.View
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslateY }] },
          ]}
        >
          <Animated.Text
            style={[styles.headerTitle,
              {
                transform: [
                  { scale: animatedFontSize },
                  { translateY: titleTranslateY },
                ],
              },
            ]}
          >
            Th|nk
          </Animated.Text>
        </Animated.View> */}

// scroll code
// const scrollY = useRef(new Animated.Value(0)).current;
//   const prevScrollY = useRef(0);
//   const [showHeader, setShowHeader] = useState(true);
//   const headerTranslateY = useRef(new Animated.Value(0)).current;
//   const titleTranslateY = useRef(new Animated.Value(0)).current;
//   const animatedFontSize = useRef(new Animated.Value(0)).current;

//   interface HandleScrollEvent extends NativeSyntheticEvent<NativeScrollEvent> {}

//   const handleScroll = (event: HandleScrollEvent): void => {
//     const currentY = event.nativeEvent.contentOffset.y;
//     scrollY.setValue(currentY);
//     if (
//       currentY - prevScrollY.current > SCROLL_THRESHOLD &&
//       showHeader &&
//       currentY > 0
//     ) {
//       setShowHeader(false);
//       Animated.timing(animatedFontSize, {
//         toValue: 0.5,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//       Animated.timing(headerTranslateY, {
//         toValue: -150,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//       Animated.timing(titleTranslateY, {
//         toValue: 20,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//     } else if (
//       prevScrollY.current - currentY > SCROLL_THRESHOLD &&
//       !showHeader
//     ) {
//       setShowHeader(true);
//       Animated.timing(animatedFontSize, {
//         toValue: 1,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//       Animated.timing(headerTranslateY, {
//         toValue: 0,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//       Animated.timing(titleTranslateY, {
//         toValue: 0,
//         duration: 200,
//         useNativeDriver: true,
//       }).start();
//     }
//     prevScrollY.current = currentY;
//   };