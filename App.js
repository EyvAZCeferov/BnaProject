import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
import Home from "./src/screens/tabs/home/home";
import Login from "./src/screens/auth/login";
import AuthIndex from "./src/screens/auth/authindex";
import Register from "./src/screens/auth/register";
import ForgetPass from "./src/screens/auth/forgetpass";
enableScreens();
console.disableYellowBox = true;
import Constants from "expo-constants";
import { Colors, TabIcon } from "./src/consts/Theme";
import { View } from "react-native";
import Add from "./src/screens/tabs/add/add";
import Maps from "./src/screens/tabs/maps/maps";
import Notifications from "./src/screens/tabs/home/notifications";
import Profile from "./src/screens/tabs/home/profile";
import Notification from "./src/screens/tabs/home/notification";
import AddToBalance from "./src/screens/tabs/add/components/addToBalance";
import RouteBilet from "./src/screens/tabs/add/components/routeBilet";
import Parking from "./src/screens/tabs/add/components/Parking";
import UserCards from "./src/screens/tabs/home/UserCards";
import OneOperation from "./src/screens/tabs/home/oneoperation";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      headerMode="none"
      initialRouteName="AuthIndex"
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: "push",
        detachPreviousScreen: true,
        gestureEnabled: true,
        headerStatusBarHeight: Constants.statusBarHeight,
      }}
    >
      <AuthStack.Screen name="AuthIndex" component={AuthIndex} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPass" component={ForgetPass} />
    </AuthStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    headerMode="none"
    initialRouteName="AuthIndex"
    screenOptions={({ route }) => ({
      animationEnabled: true,
      animationTypeForReplace: "push",
      detachPreviousScreen: true,
      gestureEnabled: true,
      headerStatusBarHeight: Constants.statusBarHeight,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? TabIcon.homeFOCUSED : TabIcon.home;
        } else if (route.name === "Add") {
          iconName = focused ? TabIcon.addFOCUSED : TabIcon.add;
        } else if (route.name === "Maps") {
          iconName = focused ? TabIcon.mapFOCUSED : TabIcon.map;
        }
        return (
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: focused ? Colors.primary1HEX : null,
              position:
                route.state && route.state.index > 0 ? "relative" : "absolute",
              top:
                route.state && route.state.index > 0 ? 10 : focused ? -27 : -10,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: focused ? 50 : 0,
              borderColor: Colors.whiteHEX,
              borderWidth: focused ? 6 : 0,
              zIndex: 1,
            }}
          >
            {iconName}
          </View>
        );
      },
    })}
    tabBarOptions={{
      showLabel: false,
      activeTintColor: Colors.primary1HEX,
      activeBackgroundColor: Colors.primary1HEX,
      inactiveBackgroundColor: Colors.primary1HEX,
      inactiveTintColor: "white",
      style: {
        height: 60,
      },
    }}
    initialRouteName="Home"
    detachInactiveScreens={true}
  >
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Add" component={AddStackScreen} />
    <Tabs.Screen name="Maps" component={Maps} />
  </Tabs.Navigator>
);

const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <HomeStack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: "push",
        detachPreviousScreen: true,
        gestureEnabled: true,
        headerStatusBarHeight: Constants.statusBarHeight,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="Notification" component={Notification} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="UserCards" component={UserCards} />
      <HomeStack.Screen name="OneOperation" component={OneOperation} />
    </HomeStack.Navigator>
  );
};

const AddStack = createStackNavigator();
const AddStackScreen = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <AddStack.Navigator
      headerMode="none"
      initialRouteName="Add"
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: "push",
        detachPreviousScreen: true,
        gestureEnabled: true,
        headerStatusBarHeight: Constants.statusBarHeight,
      }}
    >
      <AddStack.Screen name="Add" component={Add} />
      <AddStack.Screen name="AddToBalance" component={AddToBalance} />
      <AddStack.Screen name="RouteBilet" component={RouteBilet} />
      <AddStack.Screen name="Parking" component={Parking} />
    </AddStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabsScreen />
    </NavigationContainer>
  );
}
