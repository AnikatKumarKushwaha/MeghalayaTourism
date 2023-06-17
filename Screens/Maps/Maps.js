import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

function Maps({ route }) {
  const mapUri = route.params.mapUid;
  return (
    <View style={style.container}>
      <View
        style={{
          width: "100%",
          height: "165%",
          position: "relative",
          bottom: 62,
        }}
      >
        <WebView source={{ uri: mapUri }} />
      </View>
    </View>
  );
}
export default Maps;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
