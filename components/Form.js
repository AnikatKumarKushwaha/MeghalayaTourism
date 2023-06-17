import { Text, View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";

function Form({
  Label,
  value,
  placeholder,
  keyboardType,
  secure,
  onChangeText,
}) {
  return (
    <View style={style.container}>
      <Text style={style.label}>{Label}</Text>
      <TextInput
        style={style.inputContainer}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onChangeText}
      />
    </View>
  );
}
export default Form;

const style = StyleSheet.create({
  container: {
    color: "white",
    marginBottom: 4,
  },
  inputContainer: {
    borderColor: Colors.primary200,
    borderWidth: 1,
    marginHorizontal: 6,
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: Colors.primary200,
    height: 40,
    fontSize: 14,
    color: Colors.primary100,
  },
  label: {
    marginLeft: 4,
    marginTop: 6,
    marginBottom: 3,
    color: Colors.primary200,
  },
});
