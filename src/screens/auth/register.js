import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { Colors, FontSize, Styles } from "../../consts/Theme";
import LottieView from "lottie-react-native";
import TextComponent from "../../consts/TextComponent";
import Constants from "expo-constants";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        phone: null,
        pass: null,
      },
      securetextentry: true,
    };
  }

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primary1HEX}
        />
        <View
          style={[styles.header, { paddingHorizontal: 20, paddingVertical: 3 }]}
        >
          <TouchableOpacity
            style={[
              Styles.center,
              {
                width: 50,
                height: 50,
                zIndex: 999,
              },
            ]}
            onPress={() => {
              this.props.navigation.pop();
            }}
          >
            <Ionicons
              name="md-chevron-back"
              size={FontSize.xs * 2}
              color={Colors.whiteHEX}
            />
          </TouchableOpacity>
          <LottieView
            ref={(animation) => {
              this.animation = animation;
            }}
            source={require("../../animations/locationicon.json")}
            duration={7000}
            loop={true}
            resizeMode="contain"
          />
        </View>
        <View
          style={[
            Styles.center,
            {
              flex: 0.1,
              backgroundColor: Colors.primary1HEX,
              borderBottomRightRadius: 80,
              borderBottomLeftRadius: -50,
            },
          ]}
        >
          <TextComponent
            color={Colors.whiteHEX}
            size={FontSize.xxl * 1.5}
            family="Raleway_bold"
          >
            Qeydiyyatdan keç
          </TextComponent>
        </View>
        <View style={[styles.content, Styles.center]}>
          <View style={{ flex: 0.6 }}>
            <View style={{ width: width - 50 }}>
              <TextInput
                placeholder="Name Surname"
                style={styles.input}
                placeholderTextColor={Colors.blackHEX}
              />
            </View>
            <View style={{ width: width - 50 }}>
              <TextInput
                placeholder="Phone"
                style={styles.input}
                placeholderTextColor={Colors.blackHEX}
              />
            </View>
            <View style={{ width: width - 50 }}>
              <TextInput
                placeholder="Password"
                secureTextEntry={this.state.securetextentry}
                style={styles.input}
                placeholderTextColor={Colors.blackHEX}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 10,
                  top: "30%",
                }}
                onPress={() =>
                  this.setState({
                    securetextentry: !this.state.securetextentry,
                  })
                }
              >
                {this.state.securetextentry ? (
                  <Entypo
                    name="eye-with-line"
                    size={24}
                    color={Colors.primary1HEX}
                  />
                ) : (
                  <Entypo name="eye" size={24} color={Colors.primary1HEX} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.button, Styles.center]}>
              <TextComponent color={Colors.whiteHEX} size={FontSize.m}>
                Qeydiyyat
              </TextComponent>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.4 }}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayHEX,
  },
  header: {
    flex: 0.15,
    backgroundColor: Colors.primary1HEX,
  },
  content: {
    flex: 0.75,
    paddingTop: Constants.statusBarHeight,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.grayHEX,
    margin: 10,
    borderRadius: 1,
    borderBottomColor: Colors.primary1HEX,
    borderBottomWidth: 2,
  },
  button: {
    width: width - 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.primary2HEX,
    marginVertical: Constants.statusBarHeight,
  },
});
