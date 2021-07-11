import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import TextComponent from "../../../../consts/TextComponent";
import { Styles, Colors, FontSize } from "../../../../consts/Theme";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const RenderCats = () => {
  // ref
  const [funcs, setFuncs] = useState([
    {
      id: 1,
      name: "NFC",
      function: () => nfc(),
      icon: (
        <MaterialCommunityIcons name="cellphone-nfc" size={24} color="black" />
      ),
    },
    {
      id: 2,
      name: "Auto fill",
      function: () => autoFill(),
      icon: <Ionicons name="ios-newspaper" size={24} color="black" />,
    },
    {
      id: 2,
      name: "Credit",
      function: () => credit(),
      icon: <FontAwesome name="money" size={24} color="black" />,
    },
  ]);

  function autoFill() {
    console.log("autofill");
  }

  function credit() {
    console.log("credit");
  }

  function nfc() {
    console.log("nfc");
  }

  function renderFunction(funcs) {
    return funcs.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={[
            Styles.shadow,
            Styles.center,
            {
              width: 85,
              height: 95,
              backgroundColor: "white",
              borderRadius: 15,
              marginRight: 10,
              zIndex: 3,
            },
          ]}
          onPress={() => item.function()}
        >
          {item.icon}
          <TextComponent
            size={FontSize.m}
            color={Colors.blackHEX}
            family="Raleway_bold"
            style={{
              paddingTop: 5,
            }}
          >
            {item.name}
          </TextComponent>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View style={styles.container}>
      <TextComponent
        color={Colors.blackHEX}
        size={FontSize.m}
        style={{ paddingLeft: 5, marginVertical: 15, zIndex: 1 }}
        family="Raleway_bold"
      >
        Recent Operations
      </TextComponent>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          paddingHorizontal: 11,
          zIndex: 2,
        }}
      >
        {renderFunction(funcs)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.whiteHEX,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default RenderCats;
