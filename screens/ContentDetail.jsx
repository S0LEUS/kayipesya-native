import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function ContentDetail() {
  
  return (
    <View style={{ width: "100%", height: "100%" }}>
      
      <View style={{ flex: 12, backgroundColor: "#18181B" }}>

      <ScrollView>
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
        />

       
        <View style={{width:"80%",alignSelf:"center", paddingTop:10}}>
          <Text style={styles.text}>İlan Başlığı: test</Text>
          <Text style={styles.text}>İlan Başlığı: test</Text>
          <Text style={styles.text}>İlan Başlığı: test</Text>
          <Text style={styles.lastext}>İlan Başlığı: test</Text>
        </View>
        </ScrollView>
      </View>
      
    </View>

    
    
  );
}

const styles = StyleSheet.create({
  text:{
    color:"white",
    fontSize:15,
    fontWeight:"500",
    lineHeight:25,
    paddingBottom:10
  },
  lastext:{
    color:"white",
    fontSize:15,
    fontWeight:"500",
    lineHeight:25,
    paddingBottom:20
  }
})
