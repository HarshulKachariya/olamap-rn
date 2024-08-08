import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import OlaMap from "@/components/maps/OlaMap";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <OlaMap />
      {/* <ScrollView alwaysBounceHorizontal>
        <View>
          <Text>Hello USsers</Text>
        </View>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
