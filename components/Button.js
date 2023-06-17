import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={style.Container}>
        <Text style={style.text}>{children}</Text>
      </View>
    </Pressable>
  );
}
export default Button;

const style = StyleSheet.create({
  Container: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a6a3a",
    borderColor: "#086100",
    marginTop: 16,
    padding: 6,
    borderRadius: 7,
    elevation: 4,
  },
  text: {
    color: "white",
  },
});
