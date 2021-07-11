import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Picker,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";
import TextComponent from "../../../../consts/TextComponent";
import { Colors, FontSize, Styles } from "../../../../consts/Theme";
import { Ionicons, AntDesign } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
import Constants from "expo-constants";

export default class Parking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      locs: [
        {
          id: 1,
          name: "Bakı",
          loc: {
            latitude: "40.4735583",
            longitude: "49.8240783",
          },
        },
        {
          id: 2,
          name: "Gəncə",
          loc: {
            latitude: "40.7394875",
            longitude: "46.29757",
          },
        },
        {
          id: 3,
          name: "Naxçıvan",
          loc: {
            latitude: "39.1896147",
            longitude: "45.4557482",
          },
        },
        {
          id: 4,
          name: "İstanbul",
          loc: {
            latitude: "41.0052367",
            longitude: "28.8720974",
          },
        },
      ],
      zamansayi: "15 deq",
      zamans: ["15 deq", "30 deq", "1 saat", "1.5 saat", "2 saat", "3 saat"],
    };
  }

  renderItems() {
    return this.state.locs.map((e) => {
      return <Picker.Item value={e.id} label={e.name} />;
    });
  }

  renderItem({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          this.setState({
            zamansayi: item,
          })
        }
        style={[
          Styles.shadow,
          Styles.center,
          {
            width: 80,
            height: 85,
            backgroundColor:
              this.state.zamansayi == item ? Colors.primary1HEX : "#747880",
            borderRadius: 15,
            marginRight: 8,
          },
        ]}
      >
        <TextComponent
          color={Colors.whiteHEX}
          size={FontSize.m}
          style={{
            margin: 0,
            padding: 0,
            marginTop: -5,
          }}
        >
          {item}
        </TextComponent>
      </TouchableOpacity>
    );
  }

  onValueChange(item) {
    this.setState({
      selected: item,
    });
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
          <TextComponent size={FontSize.xxl} color={Colors.whiteHEX}>
            Parklama
          </TextComponent>
          <View />
        </View>
        <View style={styles.content}>
          <TextComponent
            color={Colors.blackHEX}
            size={FontSize.xl}
            style={{
              marginVertical: Constants.statusBarHeight,
            }}
          >
            Maşın
          </TextComponent>
          <TextInput
            placeholder="Maşın nömrəsi"
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
          <TextComponent
            color={Colors.blackHEX}
            size={FontSize.xl}
            style={{
              marginVertical: Constants.statusBarHeight,
            }}
          >
            Parklama məkanı
          </TextComponent>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Picker
              enabled
              mode="dropdown"
              selectedValue={this.state.selected}
              onValueChange={(val) => this.onValueChange(val)}
              style={{
                width: width - 50,
                zIndex: 9999,
              }}
            >
              {this.renderItems()}
            </Picker>
          </View>

          <TextComponent
            color={Colors.blackHEX}
            size={FontSize.xl}
            style={{
              marginVertical: Constants.statusBarHeight,
            }}
          >
            Zaman
          </TextComponent>
          <View
            style={{
              marginBottom: Constants.statusBarHeight,
            }}
          >
            <FlatList
              data={this.state.zamans}
              renderItem={this.renderItem.bind(this)}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <TouchableOpacity
            style={[
              Styles.center,
              {
                width: width - 50,
                paddingVertical: 15,
                backgroundColor: Colors.primary1HEX,
                borderRadius: 10,
              },
            ]}
          >
            <TextComponent size={FontSize.l} color={Colors.whiteHEX}>
              Təsdiq
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
