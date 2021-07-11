import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Colors, FontSize, Styles } from "../../consts/Theme";
import TextComponent from "../../consts/TextComponent";
import Constants from "expo-constants";
const { width, height } = Dimensions.get("window");

export default class AuthIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primary1HEX}
        />
        <View style={styles.header}>
          <View
            style={{
              padding: Constants.statusBarHeight / 3,
            }}
          >
            <TextComponent color={Colors.whiteHEX} size={FontSize.m}>
              BNA
            </TextComponent>
          </View>
          <ImageBackground
            source={require("../../../assets/bgPattern.png")}
            resizeMethod="auto"
            style={{
              width: width * 2,
              height: height,
              position: "absolute",
              top: -Constants.statusBarHeight,
              right: -Constants.statusBarHeight,
              opacity: 0.3,
            }}
          />
        </View>

        <View style={[styles.content, Styles.center]}>
          <TextComponent
            color={Colors.whiteHEX}
            size={FontSize.xl}
            family="Raleway_bold"
            style={{
              marginVertical: Constants.statusBarHeight / 2,
            }}
          >
            BAKI NƏQLİYYAT AGENTLİYİ
          </TextComponent>
          <TextComponent
            size={FontSize.s}
            color="rgba(255,255,255,.6)"
            style={{
              marginBottom: Constants.statusBarHeight,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </TextComponent>
          <TouchableOpacity
            style={[styles.button, Styles.center]}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <TextComponent color={Colors.primary2HEX} family="Raleway_bold">
              Log in
            </TextComponent>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              Styles.center,
              {
                backgroundColor: "transparent",
              },
            ]}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <TextComponent color={Colors.whiteHEX} family="Raleway_bold">
              Registration
            </TextComponent>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary1HEX,
  },
  header: {
    flex: 0.6,
  },
  content: {
    flex: 0.4,
    paddingHorizontal: Constants.statusBarHeight,
    backgroundColor: Colors.primary1HEX,
    borderTopLeftRadius: 80,
    shadowColor: Colors.whiteHEX,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    borderTopWidth: 4,
    borderTopColor: Colors.whiteHEX,
    borderLeftWidth: 1,
    borderLeftColor: Colors.whiteHEX,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.whiteHEX,
    borderWidth: 1,
    borderColor: Colors.whiteHEX,
    marginVertical: 5,
  },
});
