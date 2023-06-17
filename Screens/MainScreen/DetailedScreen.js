import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../../components/IconButton";
import { Colors } from "../../constants/styles";

function DetailedScreen({ navigation, route }) {
  const { trip } = route.params;

  function pressHandeler() {
    navigation.navigate("MapScreen", {
      mapUid: trip.map,
    });
  }

  function pressHandelerDirection() {
    navigation.navigate("DirectionScreen", {
      mapUid: trip.direction,
    });
  }

  return (
    <View style={style.container}>
      <View style={style.imageBox}>
        <Image source={{ uri: trip.image }} style={style.image} />
      </View>

      <View style={style.detailContainer}>
        <View style={style.detailHeaderText}>
          <Text style={style.title}>{trip.title}</Text>
          <Text style={style.location}>{trip.location}</Text>
        </View>
        <ScrollView>
          <View style={style.descriptionConatiner}>
            <Text style={style.title}>About</Text>
            <Text style={style.location}>{trip.description}</Text>
          </View>
          <View style={style.descriptionConatiner}>
            <Text style={style.title}>Pictures</Text>
            <Image style={style.images} source={{ uri: trip.image1 }} />
            <Image style={style.images} source={{ uri: trip.image2 }} />
          </View>
          <View style={style.descriptionConatiner}>
            <Text style={style.title}>Location</Text>
            <View style={style.locationContent}>
              <View style={style.locationOutline}>
                <IconButton
                  icon="location"
                  size={40}
                  color={Colors.primary100}
                  onPress={pressHandeler}
                />
                <Text style={style.text}>Map</Text>
              </View>
              <View style={style.locationOutline}>
                <IconButton
                  icon="navigate"
                  size={40}
                  color={Colors.primary100}
                  onPress={pressHandelerDirection}
                />
              </View>
              <View style={{ position: "absolute", right: 37, bottom: 18 }}>
                <Text style={style.text}>Direction</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
export default DetailedScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    overflow: "hidden",
  },
  image: {
    width: 400,
    height: 800,
  },
  detailContainer: {
    backgroundColor: "white",
    width: 373,
    height: 570,
    position: "absolute",
    marginTop: 200,
    marginHorizontal: 7,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    elevation: 4,
  },
  detailHeaderText: {
    marginTop: 10,
    marginHorizontal: 20,
    borderBottomColor: "#bbb5b5f7",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  location: {
    fontSize: 15,
    marginBottom: 10,
  },
  descriptionConatiner: {
    marginTop: 30,
    marginHorizontal: 20,
    borderBottomColor: "#bbb5b5f7",
    borderBottomWidth: 2,
  },
  images: {
    width: 300,
    height: 170,
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  locationOutline: {
    elevation: 4,
    marginBottom: 40,
    marginHorizontal: 40,
    backgroundColor: "white",
    borderRadius: 40,
    width: 70,
    height: 70,
    paddingTop: 15,
    paddingLeft: 13,
  },
  locationContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 24,
    marginBottom: 100,
  },
  text: {
    marginTop: 15,
  },
  backButton: {
    position: "absolute",
    marginLeft: 24,
    marginTop: 34,
  },
});
