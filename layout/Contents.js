import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Contents() {
  const navigation = useNavigation();

  return (
    <View id="icerikler" style={{ flex: 7, backgroundColor: "#18181B" }}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("ContentDetail")}>
          <View
            style={{
              backgroundColor: "#B0B0B1",
              height: 600,
              width: "80%",
              alignSelf: "center",
              marginTop: 50,
              borderRadius: 20,
            }}
          ></View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "#B0B0B1",
            height: 600,
            width: "80%",
            alignSelf: "center",
            marginTop: 50,
            borderRadius: 20,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#B0B0B1",
            height: 600,
            width: "80%",
            alignSelf: "center",
            marginTop: 50,
            borderRadius: 20,
          }}
        ></View>
      </ScrollView>
    </View>
  );
}
