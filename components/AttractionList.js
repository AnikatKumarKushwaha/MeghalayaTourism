import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function AttractionList({ list }) {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      {list.map((item) => {
        return (
          <TouchableOpacity
            style={style.cardContainer}
            key={item.id}
            onPress={() => {
              navigation.navigate("detailScreen", { trip: item });
            }}
          >
            <View style={[style.card, style.elevation]}>
              <View style={style.imageBox} r>
                <Image style={style.image} source={{ uri: item.image }} />
              </View>
              <View style={style.footer}>
                <View style={style.titleBox}>
                  <Text style={style.title}>{item.title}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default AttractionList;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 160,
    height: 220,
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 20,
  },
  cardContainer: {
    margin: 15,
  },
  imageBox: {
    width: 160,
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: "cover",
  },
  footer: {
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  title: {
    marginVertical: 2,
    fontSize: 16,
  },
});
