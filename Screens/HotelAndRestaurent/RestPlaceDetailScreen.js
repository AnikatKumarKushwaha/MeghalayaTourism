import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../../components/IconButton";

export function RestPlaceDetailScreen({ route }) {
  const navigation = useNavigation();

  const data = route?.params?.param;
  return (
    <SafeAreaView style={style.mainContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={style.imageConatainer}>
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "../../assets/images/Sad-Face-Emoji.png",
            }}
            style={style.image}
          />
          <View style={style.topView}>
            <Text style={{ color: "white" }}>{data?.open_now_text}</Text>
          </View>
        </View>
        <View style={{ marginTop: 8, marginLeft: 8 }}>
          <Text style={style.nameText}>{data?.name}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <IconButton icon="location" color="#2e2c2c85" size={20} />
            <Text style={{ marginTop: 3, color: "#2e2c2c85" }}>
              {data?.location_string}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 25,
            marginLeft: 15,
          }}
        >
          {data?.rating && (
            <>
              <View style={style.rating}>
                <IconButton icon="md-star" size={24} color="#D58574" />
              </View>
              <View style={{ marginLeft: 6, marginRight: 100 }}>
                <Text style={{ color: "#515151" }}>{data?.rating}</Text>
                <Text style={{ color: "#515151" }}>Rating</Text>
              </View>
            </>
          )}
        </View>

        {data?.description && (
          <>
            <Text style={style.description}>{data?.description}</Text>
          </>
        )}
        <View style={style.contactContainer}>
          {data?.phone && (
            <View style={{ flexDirection: "row", margin: 8 }}>
              <Entypo name="phone" size={24} color={Colors.primary100} />
              <Text
                style={{
                  marginLeft: 20,
                  color: Colors.primary100,
                  marginTop: 4,
                }}
              >
                {data?.phone}
              </Text>
            </View>
          )}

          {data?.email && (
            <View style={{ flexDirection: "row", margin: 8 }}>
              <Entypo name="mail" size={24} color={Colors.primary100} />
              <Text
                style={{
                  marginLeft: 20,
                  color: Colors.primary100,
                  marginTop: 4,
                }}
              >
                {data?.email}
              </Text>
            </View>
          )}

          {data?.address && (
            <View style={{ flexDirection: "row", margin: 8 }}>
              <Entypo name="address" size={24} color={Colors.primary100} />
              <Text
                style={{
                  marginLeft: 20,
                  color: Colors.primary100,
                  marginTop: 4,
                }}
              >
                {data?.address}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  imageConatainer: {
    position: "relative",
    backgroundColor: "white",
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "97%",
    height: 288,
    borderRadius: 10,
    marginTop: 10,
  },
  topView: {
    position: "absolute",
    bottom: 10,
    right: 25,
    backgroundColor: Colors.primary100,
    borderRadius: 5,
    elevation: 10,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    color: Colors.primary100,
    fontWeight: "bold",
    fontSize: 20,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9b5a9",
    width: 40,
    height: 40,
    borderRadius: 6,
    elevation: 4,
  },
  description: {
    marginTop: 8,
    marginLeft: 8,
    color: "#97A6AF",
  },
  contactContainer: {
    marginTop: 8,
    backgroundColor: "#c3bcbb",
    padding: 4,
    margin: 10,
    borderRadius: 5,
  },
});
