import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import LoadingOverlay from "../../components/LoadingOverlay";
import { GaroHillsHotels, JaintiaHillsHotels } from "../../API";
import RestPlaceList from "../../components/RestPlaceList";

function GaroHotels() {
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setmainData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    GaroHillsHotels().then((data) => {
      setmainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={{ flex: 1 }}>
          <LoadingOverlay message="Fetching Data..." />
        </View>
      ) : (
        <View>
          {mainData?.length > 0 ? (
            <ScrollView>
              {mainData?.map((data, i) => (
                <RestPlaceList
                  key={i}
                  imageSrc={
                    data?.photo?.images?.medium?.url
                      ? data?.photo?.images?.medium?.url
                      : "../../assets/images/Sad-Face-Emoji.png"
                  }
                  title={data?.name}
                  location={data?.location_string}
                  data={data}
                />
              ))}
            </ScrollView>
          ) : (
            <>
              <View style={style.noDataFoundContainer}>
                <Image
                  style={style.noDataFoundImage}
                  source={require("../../assets/images/Sad-Face-Emoji.png")}
                />
                <Text style={style.noDataFoundText}>Opps No Data Found...</Text>
              </View>
            </>
          )}
        </View>
      )}
    </>
  );
}
export default GaroHotels;

const style = StyleSheet.create({
  noDataFoundContainer: {
    width: "100%",
    height: 600,
    alignItems: "center",
    justifyContent: "center",
  },
  noDataFoundImage: {
    width: 200,
    height: 200,
  },
  noDataFoundText: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
  },
});
