import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function RestPlaceIcon({ imageSrc, text }) {
  return (
    <>
      <View style={style.container}>
        <Image style={style.image} source={imageSrc} />
      </View>
      <Text style={style.text}>{text}</Text>
    </>
  );
}
export default RestPlaceIcon;

const style = StyleSheet.create({
  container: {
    width: 85,
    height: 85,
    elevation: 20,
    borderColor: "black",
    borderRadius: 50,
    marginHorizontal: 50,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
  },
});
