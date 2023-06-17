import { Pressable, View, Text, StyleSheet } from "react-native";

function Rowgrid({ title, onPress }) {
  return (
    <View style={style.gridItemStyle}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={style.button}
        onPress={onPress}
      >
        <View style={style.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Rowgrid;

const style = StyleSheet.create({
  gridItemStyle: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
