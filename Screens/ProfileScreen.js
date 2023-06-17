import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withDecay } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

function ProfileScreen() {
  return (
    <>
      <StatusBar style="black" />
      <View style={style.mainContainer}>
        <View
          style={{
            width: "100%",
            height: 200,
            flexDirection: "row",
            backgroundColor: "#71a27c",
            borderRadius: 24,
            marginTop: 10,
            elevation: 10,
          }}
        >
          <View style={{ marginTop: 60, marginLeft: 8 }}>
            <Ionicons name="location" color={"#164820"} size={75} />
          </View>
          <View style={{ flexDirection: "column", margin: 25 }}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              ADDRESS
            </Text>
            <View style={{ marginRight: 35 }}>
              <Text
                style={{ marginRight: 50, marginTop: 25, color: "#164820" }}
              >
                New Tura PHE Campus, Tura, West Garo Hills Meghalaya, 794101.
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 200,
            flexDirection: "row",
            backgroundColor: "#71a27c",
            borderRadius: 24,
            marginTop: 20,
            elevation: 10,
          }}
        >
          <View style={{ marginTop: 60, marginLeft: 8 }}>
            <Ionicons name="call-sharp" color={"#164820"} size={75} />
          </View>
          <View style={{ flexDirection: "column", margin: 25 }}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              PHONE
            </Text>
            <View style={{ marginRight: 35 }}>
              <Text
                style={{ marginRight: 50, marginTop: 25, color: "#164820" }}
              >
                +91 9862407339
              </Text>
              <Text style={{ marginRight: 50, marginTop: 5, color: "#164820" }}>
                +91 8131849057
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 200,
            flexDirection: "row",
            backgroundColor: "#71a27c",
            borderRadius: 24,
            marginTop: 20,
            elevation: 10,
          }}
        >
          <View style={{ marginTop: 60, marginLeft: 8 }}>
            <Ionicons name="mail" color={"#164820"} size={75} />
          </View>
          <View style={{ flexDirection: "column", margin: 25 }}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Email
            </Text>
            <View style={{ marginRight: 35 }}>
              <Text
                style={{ marginRight: 50, marginTop: 25, color: "#164820" }}
              >
                @anikat.1999.akas@gmail.com
              </Text>
              <Text style={{ marginRight: 50, marginTop: 6, color: "#164820" }}>
                @chandalang15@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
export default ProfileScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
