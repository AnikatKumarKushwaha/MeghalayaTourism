import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import {
  GaroHillsAttraction,
  TopPlacesGaroHills,
} from "../../assets/data/dummy-data";
import TopPlacesOverlay from "../../components/TopPlacesOverlay";
import TopPlacesCarosel from "../../components/TopPlacesCarosel";
import RestPlace from "../../components/RestPlace";
import AttractionList from "../../components/AttractionList";

function GaroHills({ navigation }) {
  function renderTopDestination(itemData) {
    function pressHandeler() {
      navigation.navigate("detailScreen", {
        trip: itemData.item,
      });
    }

    return (
      <TopPlacesOverlay
        onPress={pressHandeler}
        id={itemData.item.id}
        image={itemData.item.image}
        title={itemData.item.title}
      />
    );
  }

  function pressHandelerHotel() {
    navigation.navigate("GaroHotel");
  }

  function pressHandelerRestaurent() {
    navigation.navigate("GaroRestaurent");
  }

  return (
    <View style={style.mainConatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainHeader title="TOP DESTINATION" />
        <TopPlacesCarosel
          list={TopPlacesGaroHills}
          renderItem={renderTopDestination}
        />
        <RestPlace
          onPress1={pressHandelerHotel}
          onPress2={pressHandelerRestaurent}
        />
        <MainHeader title="POPULAR TRIPS" />
        <AttractionList list={GaroHillsAttraction} />
      </ScrollView>
    </View>
  );
}

export default GaroHills;

const style = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: "white",
  },
});
