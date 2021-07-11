import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Picker,
  Dimensions,
  TextInput,
} from "react-native";
import TextComponent from "../../../../consts/TextComponent";
import { Colors, FontSize, Styles } from "../../../../consts/Theme";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
import { LiteCreditCardInput } from "react-native-input-credit-card";
import Constants from "expo-constants";

export default class AddToBalance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  onValueChange = (data) => {
    this.setState({
      selected: data,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.primary1HEX}
          barStyle="light-content"
        />
        <View style={[Styles.center, styles.header]}>
          <TouchableOpacity
            style={[
              Styles.center,
              {
                width: 35,
                height: 35,
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
          <TextComponent color={Colors.whiteHEX} size={FontSize.xl}>
            {this.props.route.params.other == false
              ? "Balansı artır"
              : "Başqasının balansını artır"}
          </TextComponent>
          <View />
        </View>
        <View style={styles.content}>
          <View
            style={{
              flex: 0.1,
              marginTop: Constants.statusBarHeight,
            }}
          >
            {this.props.route.params.other == false ? (
              <Picker
                enabled
                mode="dropdown"
                selectedValue={this.state.selected}
                onValueChange={(val) => this.onValueChange(val)}
                style={{
                  width: width - 50,
                  zIndex: 9999,
                  borderColor: Colors.primary1HEX,
                  borderWidth: 2,
                }}
              >
                <Picker.Item value="card1" label="Kart 1" />
                <Picker.Item value="card2" label="Kart 2" />
                <Picker.Item value="card3" label="Kart 3" />
              </Picker>
            ) : (
              <TextInput
                placeholder="Kart nömrəsi"
                style={{
                  width: width - 50,
                  height: 50,
                  backgroundColor: Colors.grayHEX,
                  color: Colors.primary1HEX,
                  padding: 10,
                  fontSize: FontSize.m,
                }}
                placeholderTextColor="gray"
              />
            )}
          </View>
          <View
            style={{
              flex: 0.1,
              width: width - 30,
              marginTop: Constants.statusBarHeight,
            }}
          >
            <LiteCreditCardInput
              onChange={this._onChange}
              style={{
                color: Colors.whiteHEX,
              }}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              width: width - 30,
              marginBottom: Constants.statusBarHeight,
            }}
          >
            <TextInput
              placeholder="0.0 AZN"
              style={{
                width: "100%",
                height: 50,
                color: Colors.primary1HEX,
                padding: 10,
                paddingLeft: 15,
                fontSize: FontSize.m,
              }}
              placeholderTextColor="gray"
              keyboardType="number-pad"
            />
          </View>

          <TouchableOpacity
            style={[
              Styles.center,
              {
                width: width - 50,
                paddingVertical: 15,
                backgroundColor: Colors.primary1HEX,
                borderRadius: 15,
              },
            ]}
          >
            <TextComponent color={Colors.whiteHEX} size={FontSize.xxl}>
              Göndər
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
    backgroundColor: Colors.grayHEX,
  },
  header: {
    backgroundColor: Colors.primary1HEX,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    backgroundColor: Colors.grayHEX,
    flex: 0.9,
    paddingHorizontal: Constants.statusBarHeight,
  },
});
