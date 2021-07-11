import React from "react";
import { Text } from "react-native";
import { Colors, FontSize } from "./Theme";
import { useFonts } from "expo-font";

export default function TextComponent(props) {
  const [loaded] = useFonts({
    Raleway_medium: require("./Fonts/Raleway-Medium.ttf"),
    Raleway_medium_italic: require("./Fonts/Raleway-MediumItalic.ttf"),
    Raleway_bold: require("./Fonts/Raleway-Bold.ttf"),
    Raleway_bold_italic: require("./Fonts/Raleway-BoldItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text
      style={[
        {
          fontSize: props.size ?? FontSize.s,
          color: props.color ?? Colors.blackHEX,
          fontFamily: props.family ?? "Raleway_medium",
        },
        props.style ?? null,
      ]}
    >
      {props.children}
    </Text>
  );
}
