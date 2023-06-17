import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

function NearBy() {
  return (
    <View style={style.container}>
      <View
        style={{
          width: "100%",
          height: "145%",
          position: "relative",
          bottom: 130,
          marginTop: 130,
        }}
      >
        <WebView
          source={{
            uri: "https://www.google.com/maps/search/tourist+places/@25.5369627,90.1860162,12z/data=!4m8!2m7!3m6!1stourist+places!2sH68P%2B26M+North-Eastern+Hill+University,+Tura+Campus,+NH+51,+Chasingre,+Meghalaya+794001!3s0x3757f409fdf76b4d:0xfd9693af8d9b88fd!4m2!1d90.2355412!2d25.5650824",
          }}
        />
      </View>
    </View>
  );
}
export default NearBy;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
