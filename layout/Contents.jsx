import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Contents() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const renderPosts = () => {
    return posts.map(post => (
      <TouchableOpacity key={post.id} onPress={() => navigation.navigate("ContentDetail", { postId: post.id })}>
        <View
          key={post.id}
          style={{
            backgroundColor: "#B0B0B1",
            height: 550,
            width: "80%",
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: 'white' }}>{post.title}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View id="icerikler" style={{ flex: 12, backgroundColor: "#18181B" }}>
      <ScrollView>
        {renderPosts()}
      </ScrollView>
    </View>
  );
}
