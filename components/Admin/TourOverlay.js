import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function TourOverlay({ id, Agency, Owner, Place, phoneNo, email }) {
  return (
    <View style={style.card}>
      <Text
        style={{
          margin: 10,
          fontSize: 16,
          fontWeight: "bold",
          color: "white",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {Agency}
      </Text>
      <View style={{ marginLeft: 10 }}>
        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          <Text style={style.text}>Owner:</Text>
          <Text style={style.textBox}>{Owner}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          <Text style={style.text}>Place:</Text>
          <Text style={style.textBox}>{Place}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          <Text style={style.text}>Email:</Text>
          <Text style={style.textBox}>{email}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 3 }}>
          <Text style={style.text}>phoneNo:</Text>
          <Text style={style.textBox}>{phoneNo}</Text>
        </View>
      </View>
    </View>
  );
}
export default TourOverlay;
const style = StyleSheet.create({
  card: {
    width: "95%",
    height: 140,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#91bb9a",
    marginLeft: 10,
  },
  text: {
    fontWeight: "bold",
  },
  textBox: {
    marginLeft: 8,
    color: "#045e18",
  },
  pressed: {
    opacity: 0.75,
  },
});
