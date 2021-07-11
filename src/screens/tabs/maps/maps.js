import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import MapView from "react-native-maps";
import { mapStyle } from "./mapstyle";
import * as Location from "expo-location";
import { Colors, FontSize, Styles } from "../../../consts/Theme";
import Constants from "expo-constants";
const { width, height } = Dimensions.get("window");
import { AntDesign, Entypo } from "@expo/vector-icons";
import TextComponent from "../../../consts/TextComponent";

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        latitude: "40.5787622",
        longitude: "49.5610412",
      },
      countries: [
        {
          id: 1,
          name: "Quba",
        },
        {
          id: 2,
          name: "Qusar",
        },
        {
          id: 3,
          name: "Xaçmaz",
        },
        {
          id: 4,
          name: "Masazır",
        },
        {
          id: 5,
          name: "Naxçıvan",
        },
      ],
    };
  }

  async getPerm() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      this.setState({
        visible: true,
        snackBarMessage: t("snackbar.notPermitted"),
        snackBarStyle: "error",
      });
      setTimeout(() => {
        this.setState({ visible: false });
      }, 1500);
    }

    let location = await Location.getCurrentPositionAsync({
      timeInterval: 100,
    });
    this.setState({
      initialRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  }

  componentDidMount() {
    this.getPerm();
  }

  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        style={[
          Styles.center,
          {
            width: width - 20,
            height: 55,
            backgroundColor: Colors.primary2HEX,
            borderRadius: 8,
            marginBottom: 5,
            flexDirection: "row",
            justifyContent: "space-around",
          },
        ]}
      >
        <Entypo name="location" size={24} color="white" />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            width: 200,
          }}
        >
          <TextComponent
            size={FontSize.m}
            color={Colors.whiteHEX}
            family="Raleway_bold"
          >
            {item.name}
          </TextComponent>
          <TextComponent
            size={FontSize.xs}
            color={Colors.grayHEX}
            family="Raleway_bold"
          >
            200 KM
          </TextComponent>
        </View>
        <TextComponent
          size={FontSize.l}
          color={Colors.whiteHEX}
          family="Raleway_bold"
        >
          0.90 ₼
        </TextComponent>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <MapView
            style={{
              flex: 1,
            }}
            initialRegion={this.state.initialRegion}
            cacheEnabled={true}
            followsUserLocation={true}
            customMapStyle={mapStyle}
            liteMode={true}
            loadingEnabled={true}
            maxZoomLevel={20}
            minZoomLevel={3}
            minDelta={true}
            maxDelta={true}
          />
        </View>
        <View style={[styles.content, Styles.center]}>
          <View
            style={[
              {
                width: width,
                height: 65,
                flexDirection: "row",
                justifyContent: "space-around",
                borderRadius: 15,
              },
              Styles.center,
            ]}
          >
            <TextInput
              placeholder="Axtar"
              placeholderTextColor={Colors.blackHEX}
              style={[
                {
                  backgroundColor: Colors.whiteHEX,
                  width: width - 80,
                  height: 60,
                  fontSize: FontSize.l,
                  borderTopLeftRadius: 7,
                  borderBottomLeftRadius: 7,
                  color: Colors.primary2HEX,
                },
                Styles.center,
              ]}
            />
            <TouchableOpacity style={[Styles.center, styles.button]}>
              <AntDesign name="search1" size={24} color={Colors.primary2HEX} />
            </TouchableOpacity>
          </View>
          <TextComponent
            color={Colors.blackHEX}
            size={FontSize.xxl}
            style={{
              marginTop: 5,
              marginBottom: 15,
            }}
          >
            Səyahət haradır ?
          </TextComponent>
          <FlatList
            data={this.state.countries}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
          />
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
    flex: 0.5,
  },
  content: {
    flex: 0.5,
    paddingTop: Constants.statusBarHeight / 2,
  },
  button: {
    width: 50,
    height: 60,
    backgroundColor: Colors.whiteHEX,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
});
