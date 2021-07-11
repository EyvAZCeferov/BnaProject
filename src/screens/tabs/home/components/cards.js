import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Image } from "react-native";
import { Colors, FontSize, Styles } from "../../../../consts/Theme";
import TextComponent from "../../../../consts/TextComponent";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import { hideNumb } from "../../../../consts/helper";
const { width, height } = Dimensions.get("window");
const icon = require("../../../../../assets/icon.png");

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {
          name: "Eyvaz Ceferov",
          numb: "xj65a4581sdf",
          price: 5.12,
        },
        {
          name: "Eyvaz Ceferov",
          numb: "xj65a4581sdsdsdafqnff",
          price: 3,
        },
      ],
    };
  }

  renderItem({ item, index }) {
    return (
      <View
        style={[
          Styles.center,
          {
            backgroundColor: Colors.whiteHEX,
            width: width,
            minHeight: 100,
            maxHeight: 500,
            zIndex: 1,
          },
        ]}
      >
        <View
          style={[
            {
              width: "93%",
              height: "93%",
              backgroundColor: Colors.whiteHEX,
            },
            styles.card,
          ]}
        >
          <View style={[styles.card, styles.cardDecoration]} />
          <Image
            source={icon}
            style={{
              width: 170,
              height: 170,
              position: "absolute",
              top: "15%",
              left: 15,
              zIndex: 2,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 10,
              height: "100%",
            }}
          >
            <TextComponent
              color={Colors.blackHEX}
              size={FontSize.xl}
              style={{
                textAlign: "right",
                marginTop: 5,
                position: "absolute",
                top: 15,
                right: 5,
              }}
              family="Raleway_bold"
            >
              {hideNumb(item.numb)}
            </TextComponent>
            <TextComponent
              color={Colors.blackHEX}
              size={FontSize.xxl}
              family="Raleway_bold"
              style={{
                textAlign: "right",
                position: "absolute",
                bottom: 25,
                right: 8,
              }}
            >
              {item.price} ₼
            </TextComponent>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.datas}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary2HEX,
    flex: 1,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  cardDecoration: {
    width: width / 2,
    height: 245,
    borderColor: Colors.grayHEX,
    borderWidth: 1,
    position: "absolute",
    top: -10,
    left: -10,
    borderTopRightRadius: 125,
    borderBottomRightRadius: 125,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
