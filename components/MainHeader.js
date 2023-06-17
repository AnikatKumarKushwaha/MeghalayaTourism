import { StyleSheet, View, Text } from "react-native";

function MainHeader({ title }) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
}

export default MainHeader;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
