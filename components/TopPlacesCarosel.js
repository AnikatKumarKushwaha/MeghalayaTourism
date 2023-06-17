import { FlatList, StyleSheet, View } from "react-native";
function TopPlacesCarosel({ list, renderItem }) {
  return (
    <View style={style.container}>
      <FlatList
        data={list}
        horizontal
        keyExtractor={(i) => i.id}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}
export default TopPlacesCarosel;

const style = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});
