import Login from "./Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "./constants/styles";
import { StatusBar } from "expo-status-bar";
import SignIn from "./Screens/SignIn";
import MainScreen from "./Screens/MainScreen/MainScreen";
import { AuthContext, AuthContextProvider } from "./store/auth-context";
import { useContext, useEffect, useState } from "react";
import IconButton from "./components/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NearBy from "./Screens/NearBy";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ProfileScreen from "./Screens/ProfileScreen";
import DetailedScreen from "./Screens/MainScreen/DetailedScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import JaiantiaHills from "./Screens/MainScreen/JaiantiaHills";
import GaroHills from "./Screens/MainScreen/GaroHills";
import Restaurent from "./Screens/HotelAndRestaurent/Restaurent";
import Hotels from "./Screens/HotelAndRestaurent/Hotel";
import JainRestaurent from "./Screens/HotelAndRestaurent/JainRestaurent";
import JainHotels from "./Screens/HotelAndRestaurent/JainHotel";
import GaroHotels from "./Screens/HotelAndRestaurent/GaroHotel";
import GaroRestaurent from "./Screens/HotelAndRestaurent/GaroRestaurent";
import { RestPlaceDetailScreen } from "./Screens/HotelAndRestaurent/RestPlaceDetailScreen";
import Maps from "./Screens/Maps/Maps";
import Direction from "./Screens/Maps/Direction";
import * as Location from "expo-location";
import AdminMain from "./Screens/Admin/AdminMain";
import ManageOperator from "./Screens/Admin/ManageOperator";

import TourContextProvider from "./store/tour-context";
import TourUserData from "./Screens/Admin/TourUserData";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Drawernavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary100 },
        headerTintColor: "white",
        drawerActiveBackgroundColor: "#66a373",
        drawerActiveTintColor: "white",
        drawerLabelStyle: {
          marginLeft: -25,
        },
      }}
    >
      <Drawer.Screen
        name="KHASI HILLS"
        component={MainScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="picture" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="JAINTIA HILLS"
        component={JaiantiaHills}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="picture" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="GARO HILLS"
        component={GaroHills}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="picture" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="TOUR OPERATOR"
        component={TourUserData}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="earth" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function MainScreenNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerScreen"
        component={Drawernavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detailScreen"
        component={DetailedScreen}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "DETAILS",
          drawerIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={Maps}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "MAP",
        }}
      />
      <Stack.Screen
        name="DirectionScreen"
        component={Direction}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "DIRECTION",
        }}
      />
      <Stack.Screen
        name="hotel"
        component={Hotels}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "HOTEL",
        }}
      />
      <Stack.Screen
        name="restaurent"
        component={Restaurent}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "RESTAURENT",
        }}
      />
      <Stack.Screen
        name="JainRestaurent"
        component={JainRestaurent}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "RESTAURENT",
        }}
      />
      <Stack.Screen
        name="JainHotel"
        component={JainHotels}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "HOTELS",
        }}
      />
      <Stack.Screen
        name="GaroHotel"
        component={GaroHotels}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "HOTELS",
        }}
      />
      <Stack.Screen
        name="GaroRestaurent"
        component={GaroRestaurent}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "RESTAURENT",
        }}
      />
      <Stack.Screen
        name="RestPlaceDetailScreen"
        component={RestPlaceDetailScreen}
        options={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
          headerTitle: "DETAILS",
        }}
      />
    </Stack.Navigator>
  );
}

function BottomNavigator() {
  const authCtx = useContext(AuthContext);
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary100 },
        tabBarActiveTintColor: Colors.primary100,
        headerTintColor: "white",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={MainScreenNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="NearBy"
        component={NearBy}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Contact us"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary100 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignUp" component={SignIn} />
    </Stack.Navigator>
  );
}
function Admin() {
  const authCtx = useContext(AuthContext);
  return (
    <TourContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="AdminPannel"
          component={AdminMain}
          options={{
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="exit"
                color={tintColor}
                size={24}
                onPress={authCtx.logout}
              />
            ),
          }}
        />
        <Stack.Screen name="ManageOperator" component={ManageOperator} />
      </Stack.Navigator>
    </TourContextProvider>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  const [location, setLocation] = useState();
  // const [address, setAddress] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    };
    getPermissions();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary100 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Drawer"
        component={BottomNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && authCtx.isAdmin && <Admin />}
      {authCtx.isAuthenticated && !authCtx.isAdmin && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);
  if (isTryingLogin) {
    return; //<AppLoading />;
  }
  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
