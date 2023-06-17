import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../../components/IconButton";
import AdminButton from "../../components/Admin/AdminButton";
import Form from "../../components/Form";
import { useContext } from "react";
import { TourContext } from "../../store/tour-context";
import { useState } from "react";
import { deleteTour, storeTour, updateTour } from "../../util/http";

function ManageOperator({ route, navigation }) {
  const tourCtx = useContext(TourContext);
  const editedOperatorId = route.params?.Tourid;
  const isEditing = !!editedOperatorId;

  const selectedTour = tourCtx.tour.find(
    (tour) => tour.id === editedOperatorId
  );

  const [agencyName, setAgencyName] = useState(
    selectedTour ? selectedTour.Agency : ""
  );
  const [ownerName, setOwnerName] = useState(
    selectedTour ? selectedTour.Owner : ""
  );
  const [placeName, setPlaceName] = useState(
    selectedTour ? selectedTour.Place : ""
  );
  const [phoneNo, setPhoneNo] = useState(
    selectedTour ? selectedTour.phoneNo : ""
  );
  const [email, setemail] = useState(selectedTour ? selectedTour.email : "");
  function ownerChangeHandeler(enteredText) {
    setOwnerName(enteredText);
  }
  function AgencyChangeHandeler(enteredText) {
    setAgencyName(enteredText);
  }
  function placeChangeHandeler(enteredText) {
    setPlaceName(enteredText);
  }
  function phoneNoChangeHandeler(enteredText) {
    setPhoneNo(enteredText);
  }
  function emailChangeHandeler(enteredText) {
    setemail(enteredText);
  }

  async function deleteOperator() {
    await deleteTour(editedOperatorId);
    tourCtx.deleteTour(editedOperatorId);
    navigation.goBack();
  }
  function cancelHandeler() {
    navigation.goBack();
  }
  async function confirmHandeler(tourData) {
    if (isEditing) {
      tourCtx.updateTour(editedOperatorId, tourData);
      await updateTour(editedOperatorId, tourData);
    } else {
      const id = await storeTour(tourData);
      tourCtx.addTour({ ...tourData, id: id });
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Tour Operator" : "Add New Tour Operator",
    });
  }, [navigation, isEditing]);

  function submitHandeler() {
    const tourData = {
      Agency: agencyName,
      Owner: ownerName,
      Place: placeName,
      phoneNo: phoneNo,
      email: email,
    };

    confirmHandeler(tourData);
  }

  return (
    <View style={style.container}>
      <View>
        <Form
          Label="Agency"
          onChangeText={AgencyChangeHandeler}
          value={agencyName}
        />
        <Form
          Label="Owner"
          onChangeText={ownerChangeHandeler}
          value={ownerName}
        />
        <Form
          Label="Place"
          onChangeText={placeChangeHandeler}
          value={placeName}
        />
        <Form
          Label="Phone No."
          keyboardType="phone-pad"
          onChangeText={phoneNoChangeHandeler}
          value={phoneNo}
        />
        <Form
          Label="Email"
          keyboardType="email-address"
          onChangeText={emailChangeHandeler}
          value={email}
        />
      </View>
      <View style={style.buttons}>
        <AdminButton
          mode="flat"
          onPress={cancelHandeler}
          styles={style.buttonStyle}
        >
          Cancel
        </AdminButton>
        <AdminButton onPress={submitHandeler} styles={style.buttonStyle}>
          {isEditing ? "update" : "add"}
        </AdminButton>
      </View>
      {isEditing && (
        <View style={style.deleteContainer}>
          <IconButton
            icon="trash"
            color="red"
            size={30}
            onPress={deleteOperator}
          />
        </View>
      )}
    </View>
  );
}
export default ManageOperator;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#66a373",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#164820",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
