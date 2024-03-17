import { View, Text, TouchableOpacity, Image, Alert, SafeAreaView } from 'react-native'
import React from 'react'

export default function Navbar() {
  return (
    <SafeAreaView
        id="navbar"
        style={{
          flex: 1,
          backgroundColor: "#7843E6",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          id="left"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <TouchableOpacity onPress={()=>{Alert.alert("BİLDİRİM🔴","Bu bir test bildirimidir.")}}>
            <Image
              source={require("../assets/profil.png")}
              style={{ height: 70, width: 70, top: 10 }}
            />
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 20, top: 5, left: 5 }}>
            Username
          </Text>
        </View>

        <View
          id="right"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/cikis.png")}
              style={{ height: 55, width: 55, top: 10, right: 15 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  )
}