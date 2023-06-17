import { Pressable, View, Text, Image, StyleSheet } from "react-native";

const card_width = 290;
const card_Height = 170;

function TopPlacesOverlay({ onPress, id, image, title }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginLeft: 15,
        marginRight: id === 3 ? 15 : 0,
      }}
    >
      <View style={[style.card]}>
        <Image source={{ uri: image }} style={style.image} />

        <View style={style.titleBox}>
          <Text style={style.title}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default TopPlacesOverlay;

const style = StyleSheet.create({
  card: {
    width: card_width,
    height: card_Height,
    marginTop: 8,
    borderRadius: 8,
    elevation: 20,
    borderColor: "black",
  },
  image: {
    width: card_width,
    height: card_Height,
    borderRadius: 8,
  },
  titleBox: {
    position: "absolute",
    top: 110,
    left: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
