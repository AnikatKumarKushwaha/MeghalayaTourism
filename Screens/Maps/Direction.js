import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

function Direction({ route }) {
  const mapUri = route.params.mapUid;
  return (
    <View style={style.container}>
      <View
        style={{
          width: "100%",
          height: "125%",
          position: "relative",
        }}
      >
        <WebView source={{ uri: mapUri }} />
      </View>
    </View>
  );
}
export default Direction;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
