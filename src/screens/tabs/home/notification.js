import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { Colors, Styles, FontSize } from "../../../consts/Theme";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import TextComponent from "../../../consts/TextComponent";
import Constants from "expo-constants";
import { SwipeListView } from "react-native-swipe-list-view";

const { width, height } = Dimensions.get("window");

export default class Notification extends React.Component {
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
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        },
        {
          id: 2,
          name: "Notification 2",
          date: "2021-05-20",
          image:
            "https://www.gradianhealth.org/wp-content/uploads/2017/05/campaign.jpg",
          readed: true,
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        },
      ],
      notification: null,
    };
  }

  getInfo() {
    var data = null;
    this.state.data.map((e, index) => {
      if (e.id == this.props.route.params.id) {
        data = e;
      }
    });
    this.setState({
      notification: data,
    });
  }

  UNSAFE_componentWillMount() {
    this.getInfo();
  }

  componentDidMount() {
    this.getInfo();
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
            {this.state.notification != null
              ? this.state.notification.name
              : null}
          </TextComponent>
          <View />
        </View>
        <View style={[styles.content, Styles.center]}>
          <ScrollView>
            <Image
              source={{ uri: this.state.notification.image }}
              style={{
                width: width,
                height: width,
              }}
              resizeMethod="auto"
            />
            <TextComponent
              color={Colors.whiteHEX}
              size={FontSize.l}
              style={{
                padding: 15,
              }}
            >
              {this.state.notification.description}
            </TextComponent>
          </ScrollView>
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
  },
});
