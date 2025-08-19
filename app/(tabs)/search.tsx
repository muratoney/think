import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// Define navigation param types
type RootStackParamList = {
  Search: undefined;
  Profile: { userId: string };
};

interface User {
  _id: string;
  username: string;
  bio?: string;
}

// Mock data (simulates backend response)
const mockUsers: User[] = [
  { _id: "1", username: "Alice", bio: "Loves coding" },
  { _id: "2", username: "Bob", bio: "ThinkNow fan" },
  { _id: "3", username: "Charlie", bio: "Daily thoughts" },
  { _id: "4", username: "Diana", bio: "Dreamer" },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Filter users based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredUsers([]);
    } else {
      const filtered = mockUsers.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  // Handle Follow button press (placeholder for future API)
  const handleFollow = (userId: string) => {
    alert(`Followed user with ID: ${userId}`);
  };

  // Render each user in the list
  const renderUser = ({ item }: { item: User }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate("Profile", { userId: item._id })}
    >
      <View style={styles.userContent}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.bio}>{item.bio || "No bio"}</Text>
      </View>
      <TouchableOpacity
        style={styles.followButton}
        onPress={() => handleFollow(item._id)}
      >
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <MaterialIcons
              name="search"
              size={24}
              color="#0066cc"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for users..."
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
          {searchQuery.trim() === "" && (
            <Text style={styles.promptText}>Search for users</Text>
          )}
          {filteredUsers.length === 0 && searchQuery.trim() !== "" && (
            <Text style={styles.promptText}>No users found</Text>
          )}
          <FlatList
            data={filteredUsers}
            renderItem={renderUser}
            keyExtractor={(item) => item._id}
            style={styles.list}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6f0ff",
    borderRadius: 8,
    margin: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  list: {
    flex: 1,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  userContent: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  bio: {
    fontSize: 14,
    color: "#666",
  },
  followButton: {
    backgroundColor: "#0066cc", 
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  followButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  promptText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#0066cc", 
  },
});

export default SearchScreen;
