import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
function RestPlaceList({ imageSrc, title, location, data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.cardContainer}
      onPress={() => {
        navigation.navigate("RestPlaceDetailScreen", { param: data });
      }}
    >
      <View style={[style.card, style.elevation]}>
        <View style={style.imageBox} r>
          <Image style={style.image} source={{ uri: imageSrc }} />
        </View>
        <View style={style.footer}>
          <View style={style.titleBox}>
            <Text style={style.title}>{title}</Text>
          </View>
          <View style={style.locationContainer}>
            <Ionicons name="location" color={Colors.primary100} size={24} />
            <Text style={style.locationName}>
              {location?.length > 39 ? `${location.slice(0, 39)}...` : location}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default RestPlaceList;

const style = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 280,
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 20,
  },
  cardContainer: {
    margin: 20,
  },

  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },
  footer: {
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  title: {
    marginVertical: 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  locationContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  locationName: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 4,
    color: Colors.primary100,
  },
});
