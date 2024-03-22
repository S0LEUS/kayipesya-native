import { StatusBar } from "expo-status-bar";
import Contents from "../layout/Contents";

import {
  View,
  SafeAreaView,
} from "react-native";

export default function Home() {
  return (
      <View style={{ width: "100%", height: "100%" }}>
        <StatusBar hidden />

        <Contents />

      </View>
  );
}
