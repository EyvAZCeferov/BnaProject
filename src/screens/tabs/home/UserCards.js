import React from "react";
import { TextComponent } from "../../../consts/TextComponent";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Styles, FontSize } from "../../../consts/Theme";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

export default class UserCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
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
      console.log(item)
    return (
      <TouchableOpacity key={index}>
        <TextComponent>A</TextComponent>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
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
            Kartlar
          </TextComponent>
          <View />
        </View>

        <View style={styles.content}>
          <FlatList
            data={this.state.cards}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(item, index) => index.toString()}
          />
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
