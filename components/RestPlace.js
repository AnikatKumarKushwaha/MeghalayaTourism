import { StyleSheet, Text, View } from "react-native";
import RestPlaceIcon from "./RestPlaceIcon";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function RestPlace({ onPress1, onPress2 }) {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress1}>
        <RestPlaceIcon
          imageSrc={require("../assets/images/14672199.jpg")}
          text="hotels"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress2}>
        <RestPlaceIcon
          imageSrc={require("../assets/images/2695441.jpg")}
          text="Restaurent"
        />
      </TouchableOpacity>
    </View>
  );
}
export default RestPlace;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
