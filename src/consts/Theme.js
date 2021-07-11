import React from "react";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

export const Colors = {
  whiteHEX: "#ffffff",
  whiteRGB: "rgb(255,255,255)",
  blackHEX: "#000000",
  blackRGB: "rgb(0,0,0)",
  primary1HEX: "#0F599A",
  primary1RGB: "rgb(15,89,154)",
  primary2HEX: "#3371B9",
  primary2RGB: "rgb(51, 113, 185)",
  grayHEX: "#f2f2f2",
  grayRGB: "rgb(242,242,242)",
  successHEX: "#22bb33",
  successRGB: "rgb(34,187,51)",
  errorHEX: "#bb2124",
  errorRGB: "rgb(187,33,36)",
};

export const CardColors = [
  [Colors.green1RGB, Colors.green2RGB],
  ["rgb(75,52,255)", "rgba(70,50,200,0.85)"],
  ["rgb(103,152,255)", "rgba(103,152,255,0.85)"],
  ["rgb(255,195,52)", "rgba(255,195,52,0.85)"],
  ["rgb(191,54,12)", "rgba(191,54,12,0.85)"],
  ["rgb(234,50,29)", "rgba(234,50,29,0.85)"],
  ["rgb(78,52,46)", "rgba(78,52,46,0.85)"],
  ["rgb(66,66,66)", "rgba(66,66,66,0.85)"],
  ["rgb(49,27,146)", "rgba(49,27,146,0.85)"],
  ["rgb(240,98,146)", "rgba(240,98,146,0.85)"],
  ["rgb(130,119,23)", "rgba(130,119,23,0.85)"],
  ["rgb(0,230,118)", "rgba(0,230,118,0.85)"],
  ["rgb(255,213,79)", "rgba(255,213,79,0.85)"],
  ["rgb(129,199,132)", "rgba(129,199,132,0.85)"],
  ["rgb(103,80,101)", "rgba(103,80,101,0.85)"],
  ["rgb(1,80,101)", "rgba(1,80,101,0.85)"],
  ["rgb(2,123,121)", "rgba(2,123,121,0.85)"],
];

export const FontSize = {
  xs: 15,
  s: 16,
  m: 17,
  l: 19,
  xl: 22,
  xxl: 24,
};

export const Styles = {
  center: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
};

export const TabIcon = {
  home: <Ionicons name="home-sharp" size={24} color={Colors.whiteHEX} />,
  homeFOCUSED: (
    <Ionicons
      name="home-outline"
      size={30}
      color={Colors.primary1HEX}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 9,
        paddingVertical: 8,
        borderRadius: 200,
        borderColor: Colors.primary1HEX,
        borderWidth: 2,
        textAlign: "center",
      }}
    />
  ),
  add: <MaterialIcons name="add-circle" size={24} color={Colors.whiteHEX} />,
  addFOCUSED: (
    <MaterialIcons
      name="add"
      size={24}
      color="black"
      color={Colors.primary1HEX}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 9,
        paddingVertical: 8,
        borderRadius: 200,
        borderColor: Colors.primary1HEX,
        borderWidth: 2,
        textAlign: "center",
      }}
    />
  ),
  map: (
    <MaterialCommunityIcons
      name="map-marker"
      size={24}
      color={Colors.whiteHEX}
    />
  ),
  mapFOCUSED: (
    <MaterialCommunityIcons
      name="map-marker-check-outline"
      size={30}
      color={Colors.primary1HEX}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 9,
        paddingVertical: 8,
        borderRadius: 200,
        borderColor: Colors.primary1HEX,
        borderWidth: 2,
        textAlign: "center",
      }}
    />
  ),
  info: <FontAwesome name="user" size={24} color={Colors.whiteHEX} />,
  infoFOCUSED: (
    <FontAwesome
      name="user-o"
      size={30}
      color={Colors.primary1HEX}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 9,
        paddingVertical: 8,
        borderRadius: 200,
        borderColor: Colors.primary1HEX,
        borderWidth: 2,
        textAlign: "center",
      }}
    />
  ),
};
