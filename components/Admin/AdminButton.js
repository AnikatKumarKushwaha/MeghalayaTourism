import { Pressable, StyleSheet, Text, View } from "react-native";

function AdminButton({ children, onPress, mode, styles }) {
  return (
    <View style={styles}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && style.pressed}
      >
        <View style={[style.button, mode === "flat" && style.flat]}>
          <Text style={[style.buttonText, mode === "flat" && style.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default AdminButton;

const style = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#164820",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: "#164820",
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});
