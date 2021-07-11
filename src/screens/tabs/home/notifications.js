import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { Colors, Styles, FontSize } from "../../../consts/Theme";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import TextComponent from "../../../consts/TextComponent";
import Constants from "expo-constants";
import { SwipeListView } from "react-native-swipe-list-view";

const { width, height } = Dimensions.get("window");

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Notification 1",
          date: "2021-05-20",
          image:
            "https://mydmi.imgix.net/v3blog/How_to_Create_Your_First_Marketing_Campaign.jpg?crop=edges&fit=crop&fm=jpg&h=1260&ixlib=php-3.3.1&q=40&w=2400&s=ee281dae1fa15895a48fd3842f6456df",
          readed: false,
        },
        {
          id: 2,
          name: "Notification 2",
          date: "2021-05-20",
          image:
            "https://www.gradianhealth.org/wp-content/uploads/2017/05/campaign.jpg",
          readed: true,
        },
      ],
    };
  }

  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        style={[
          Styles.center,
          {
            width: width - 20,
            height: 75,
            backgroundColor: Colors.primary2HEX,
            borderBottomColor: Colors.whiteHEX,
            borderBottomWidth: 2,
            marginBottom: 5,
            flexDirection: "row",
            justifyContent: "space-around",
          },
        ]}
        onPress={() =>
          this.props.navigation.navigate("Notification", {
            id: item.id,
          })
        }
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
          }}
        />
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
            {item.date}
          </TextComponent>
        </View>
        <TextComponent
          size={FontSize.l}
          color={Colors.whiteHEX}
          family="Raleway_bold"
        >
          {item.readed == true ? (
            <Octicons
              name="primitive-dot"
              size={24}
              color={Colors.successHEX}
            />
          ) : (
            <Octicons name="primitive-dot" size={24} color={Colors.errorHEX} />
          )}
        </TextComponent>
      </TouchableOpacity>
    );
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
                width: 50,
                height: 50,
              },
            ]}
            onPress={() => {
              this.props.navigation.pop();
            }}
          >
            <Ionicons
              name="md-chevron-back"
              size={FontSize.xs * 2}
              color={Colors.blackHEX}
            />
          </TouchableOpacity>
          <TextComponent color={Colors.blackHEX} size={FontSize.xxl}>
            Notifications
          </TextComponent>
          <View />
        </View>
        <View style={[styles.content, Styles.center]}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={true}
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
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flex: 0.9,
    backgroundColor: Colors.primary2HEX,
    paddingTop: Constants.statusBarHeight / 2,
  },
  rowFront: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 5,
  },
  backRightBtn: {
    backgroundColor: "white",
    width: 55,
    height: 70,
  },
});
