import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../IconButton";

function AdminOutput({ list, RenderItem }) {
  const navigation = useNavigation();

  function pressHandeler() {
    navigation.navigate("ManageOperator");
  }

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

      <Pressable
        onPress={pressHandeler}
        style={({ pressed }) => pressed && style.pressed}
      >
        <View style={style.pressable}>
          <View
            style={{
              backgroundColor: "#66a373",
              width: "94%",
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <IconButton icon="add-outline" size={26} color="white" />
          </View>
        </View>
      </Pressable>

      <CheckList />
    </View>
  );
}
export default AdminOutput;

const style = StyleSheet.create({
  pressable: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  infoText: {
    color: "green",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
