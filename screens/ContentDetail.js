import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Navbar from "../layout/Navbar";



export default function ContentDetail() {
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <Navbar />

      <View style={{ flex: 7, backgroundColor: "#18181B" }}>
        <View
          id="box"
          style={{
            backgroundColor: "#B0B0B1",
            height: 600,
            width: "80%",
            alignSelf: "center",
            marginTop: 50,
            borderRadius: 20,
          }}
        ></View>

        <View style={{width:"80%",alignSelf:"center", paddingTop:10}}>
          <Text style={styles.text}>İlan Başlığı: test</Text>
          <Text style={styles.text}>İlan Başlığı: test</Text>
          <Text style={styles.text}>İlan Başlığı: test</Text>
          <Text style={styles.text}>İlan Başlığı: test</Text>
        </View>

      </View>
    </SafeAreaView>

    
    
  );
}

const styles = StyleSheet.create({
  text:{
    color:"white",
    fontSize:15,
    fontWeight:"500",
    lineHeight:25
  }
})
