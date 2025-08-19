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

const following = () => {
  

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

export default following;


