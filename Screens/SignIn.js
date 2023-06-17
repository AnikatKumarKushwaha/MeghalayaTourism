import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { Colors } from "../constants/styles";
import Form from "../components/Form";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function SignIn() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredCheckPassword, setEnteredCheckPassword] = useState("");

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function onAuthentication(email, password) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user please check your input and try again later."
      );
      setIsAuthenticating(false);
    }
  }

  function SignInHandeler() {
    let email = enteredEmail.trim();
    let password = enteredPassword.trim();

    const emailIsValid = email.includes("@gmail.com");
    const passwordIsValid = password.length > 6;
    const confirmPasswordIsValid = enteredPassword === enteredCheckPassword;

    if (!emailIsValid || !passwordIsValid || !confirmPasswordIsValid) {
      Alert.alert("Invalid input", "Please check your entered credentials");
      return;
    }
    onAuthentication(enteredEmail, enteredPassword);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return (
    <View style={style.mainContainer}>
      <View style={style.innerContainer}>
        <View>
          <Form
            Label="Name"
            value={Text}
            placeholder="enter your Name"
            keyboardType="email-address"
          />
          <Form
            Label="Email"
            value={Text}
            placeholder="enter your Email"
            keyboardType="email-address"
            onChangeText={setEnteredEmail}
          />
          <Form
            Label="Password"
            value={Text}
            placeholder="enter your Password"
            secure
            onChangeText={setEnteredPassword}
          />
          <Form
            Label=" Confirm Password"
            value={Text}
            placeholder="enter your Password"
            secure
            onChangeText={setEnteredCheckPassword}
          />
          <Button onPress={SignInHandeler}>Sign up</Button>
        </View>
      </View>
    </View>
  );
}

export default SignIn;

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
    elevation: 20,
  },
  bottomTab: {
    marginTop: 9,
    alignItems: "center",
  },
  text: {
    color: Colors.primary100,
  },
});
