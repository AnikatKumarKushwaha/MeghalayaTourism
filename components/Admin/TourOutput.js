import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../IconButton";

function TourOutput({ list, RenderItem }) {
  let content = <Text style={style.infoText}>No Data Has Been Added</Text>;

  function CheckList() {
    if (list.length > 0) {
      content = (
        <FlatList
          data={list}
          renderItem={RenderItem}
          keyExtractor={(i) => i.id}
        />
      );
      return content;
    } else {
      return content;
    }
  }

  return (
    <View style={{ marginBottom: 124 }}>
      <Text
        style={{
          marginTop: 8,
          marginLeft: 10,
          marginBottom: 8,
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        Tour Operator
      </Text>

      <CheckList />
    </View>
  );
}
export default TourOutput;

const style = StyleSheet.create({
  pressable: {
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    color: "green",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
