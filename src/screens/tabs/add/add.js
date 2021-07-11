import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import TextComponent from "../../../consts/TextComponent";
import { Colors, Styles, FontSize } from "../../../consts/Theme";
const { width } = Dimensions.get("window");
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Balance from "./components/Balance";
import Bilet from "./components/Bilet";

export default function Add() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "balance",
      title: "Balance",
      icon: (
        <MaterialCommunityIcons name="account-cash" size={24} color="white" />
      ),
    },
    {
      key: "ticket",
      title: "Bilet",
      icon: <FontAwesome name="ticket" size={24} color="white" />,
    },
  ]);

  const renderScene = SceneMap({
    balance: Balance.bind(this),
    ticket: Bilet.bind(this),
  });

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primary2HEX}
        barStyle="light-content"
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: width }}
        lazy={true}
        swipeEnabled={true}
        style={{
          backgroundColor: Colors.grayHEX,
          height: 90,
          width: width,
        }}
        tabBarPosition="top"
        renderTabBar={(props) => {
          return (
            <TabBar
              style={[
                {
                  backgroundColor: Colors.primary2HEX,
                  width: width,
                  height: 70,
                },
              ]}
              {...props}
              renderTabBarItem={(prop) => {
                return (
                  <TouchableOpacity
                    onPress={prop.onPress}
                    style={[
                      {
                        flexDirection: "column",
                        width: "50%",
                        height: 70,
                      },
                      Styles.center,
                    ]}
                  >
                    {prop.route.icon}
                    <TextComponent size={FontSize.xxl} color={Colors.whiteHEX}>
                      {prop.route.title}
                    </TextComponent>
                  </TouchableOpacity>
                );
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
  header: {
    flex: 0.1,
  },
  content: { flex: 0.9 },
});
