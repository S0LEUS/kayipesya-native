import { StatusBar } from "expo-status-bar";
import Navbar from "../layout/Navbar";
import Contents from "../layout/Contents";

import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={{ width: "100%", height: "100%" }}>
        <StatusBar hidden />

        <Navbar />

        <Contents />

      </View>
    </SafeAreaView>
  );
}
