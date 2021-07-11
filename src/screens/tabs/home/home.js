import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import { Colors, FontSize, Styles } from "../../../consts/Theme";
import TextComponent from "../../../consts/TextComponent";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Cards from "./components/cards";
import RecentOperations from "./components/recentoperations";
import RenderCats from "./components/cats";

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.grayHEX} barStyle="dark-content" />
        <View style={[Styles.center, styles.header]}>
          <TouchableOpacity
            style={[
              Styles.center,
              {
                paddingTop: 5,
              },
            ]}
            onPress={() => this.props.navigation.navigate("Notifications")}
          >
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TextComponent color={Colors.blackHEX} size={FontSize.xxl}>
            BNA
          </TextComponent>
          <TouchableOpacity
            style={[
              Styles.center,
              {
                paddingTop: 5,
              },
            ]}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            {this.state.user != null ? (
              <Image
                source={{
                  uri: "https://www.shareicon.net/data/512x512/2016/06/25/786551_people_512x512.png",
                }}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 35,
                }}
              />
            ) : (
              <FontAwesome name="user-o" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View
            style={{
              flex: 0.4,
            }}
          >
            <Cards />
          </View>
          <View
            style={{
              flex: 0.25,
            }}
          >
            <RenderCats />
          </View>
          <View
            style={{
              flex: 0.35,
            }}
          >
            <RecentOperations />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayHEX,
    flex: 1,
  },
  header: {
    flex: 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: Constants.statusBarHeight,
    width: width,
  },
  content: {
    flex: 0.9,
  },
});
