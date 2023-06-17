import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

import { useContext, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import { Colors } from "../constants/styles";
import LoadingOverlay from "../components/LoadingOverlay";
import { login } from "../util/auth";
import { AuthContext } from "../store/auth-context";

function Login({ navigation }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function onAuthentication(email, password) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  function emailHandeler(enteredText) {
    setEnteredEmail(enteredText);
  }

  function passwordHandeler(enteredText) {
    setEnteredPassword(enteredText);
  }

  function logInHandeler() {
    let email = enteredEmail.trim();
    let password = enteredPassword.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert("Invalid input", "Please check your entered credentials");
      return;
    }

    if (enteredEmail === "test@gmail.com") {
      const check = "1";
      authCtx.CheckAdmin(check);
    }
    onAuthentication(enteredEmail, enteredPassword);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="logging you in..." />;
  }

  function pressHandeler() {
    navigation.navigate("SignUp");
  }

  return (
    <View style={style.mainContainer}>
      <View style={style.innerContainer}>
        <View>
          <Form
            Label="Email"
            value={Text}
            placeholder="enter your Email"
            keyboardType="email-address"
            onChangeText={emailHandeler}
          />
          <Form
            Label="Password"
            value={Text}
            placeholder="enter your Password"
            secure
            onChangeText={passwordHandeler}
          />
          <Button onPress={logInHandeler}>Log in</Button>
        </View>
      </View>
      <View style={style.bottomTab}>
        <Text style={style.text}>Not a member?</Text>
        <Pressable onPress={pressHandeler}>
          <Text style={style.buttonText}>Click here!</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default Login;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary200,
  },
  innerContainer: {
    marginTop: 120,
    justifyContent: "center",
    marginHorizontal: 23,
    backgroundColor: Colors.primary100,
    padding: 24,
    paddingTop: 16,
    borderRadius: 10,
    elevation: 30,
  },
  bottomTab: {
    marginTop: 9,
    alignItems: "center",
  },
  text: {
    color: Colors.primary100,
  },
  buttonText: {
    color: "#1a6a3a",
  },
});
