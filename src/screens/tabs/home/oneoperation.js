import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Colors, Styles, FontSize } from "../../../consts/Theme";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import TextComponent from "../../../consts/TextComponent";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import QRCode from "react-native-qrcode-svg";
const { width } = Dimensions.get("window");

export default class OneOperation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.primary1HEX}
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
            Şəhərlər arası
          </TextComponent>
          <View />
        </View>
        <ScrollView style={styles.content}>
          <View
            style={[
              Styles.center,
              {
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: Constants.statusBarHeight,
              },
            ]}
          >
            <TextComponent size={FontSize.m} color={Colors.blackHEX}>
              Haradan - Haraya
            </TextComponent>
            <TextComponent size={FontSize.xl} color={Colors.blackHEX}>
              Bakı - Qazax
            </TextComponent>
          </View>
          <View
            style={[
              Styles.center,
              {
                flexDirection: "row",
                justifyContent: "space-around",
                marginVertical: Constants.statusBarHeight,
              },
            ]}
          >
            <TextComponent size={FontSize.m} color={Colors.blackHEX}>
              Məbləğ
            </TextComponent>
            <TextComponent size={FontSize.xl} color={Colors.blackHEX}>
              5.00 AZN
            </TextComponent>
          </View>
          <View
            style={[
              Styles.center,
              {
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: Constants.statusBarHeight,
              },
            ]}
          >
            <TextComponent size={FontSize.m} color={Colors.blackHEX}>
              Sifariş tarixi
            </TextComponent>
            <TextComponent size={FontSize.xl} color={Colors.blackHEX}>
              10.06.2021
            </TextComponent>
          </View>

          <View style={{ height: 20 }} />
          <Barcode
            format="CODE128A"
            value="012345678901200005156516"
            text="012345678901200005156516"
            style={{ marginBottom: 40 }}
            maxWidth={width - 50}
            background={Colors.grayHEX}
          />
          <View style={{ height: 10 }} />
          <QRCode
            value="Just some string value"
            logoBackgroundColor="transparent"
            size={width - 50}
            backgroundColor={Colors.grayHEX}
          />
        </ScrollView>
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
    flex: 0.87,
    paddingHorizontal: Constants.statusBarHeight,
    marginBottom: Constants.statusBarHeight,
  },
});
