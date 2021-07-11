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
import DateTimePicker from "@react-native-community/datetimepicker";

export default class RouteBilet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      types: [
        {
          id: 1,
          type: "air",
          name: "Hava yolları",
        },
        {
          id: 2,
          type: "rail",
          name: "Dəmir yolları",
        },
        {
          id: 3,
          type: "seher",
          name: "Şəhərlər arası",
        },
        {
          id: 4,
          type: "parking",
          name: "Parklama",
        },
      ],
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
      startDate: null,
      endDate: null,
      show: false,
      shernisinsayi: 1,
      shernisins: [1, 2, 3, 4, 5, 6],
    };
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date(1598051730000);
    if (this.state.startDate != null) {
      this.setState({
        startDate: currentDate,
        show: false,
      });
    } else {
      this.setState({
        endDate: currentDate,
        show: false,
      });
    }
  };

  show(type) {
    this.setState({
      show: true,
    });
  }

  getType() {
    var type = [];
    this.state.types.map((e, index) => {
      if (e.type == this.props.route.params.type) {
        type = this.state.types[index];
      }
    });
    return type;
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
            shernisinsayi: item,
          })
        }
        style={[
          Styles.shadow,
          Styles.center,
          {
            width: 70,
            height: 70,
            backgroundColor:
              this.state.shernisinsayi == item ? Colors.primary1HEX : "#747880",
            borderRadius: 15,
            marginRight: 8,
          },
        ]}
      >
        <TextComponent
          color={Colors.whiteHEX}
          size={FontSize.xxl}
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

  render() {
    const type = this.getType();
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
            {type.name}
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
            Haradan - Haraya
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
                width: width / 2 - 10,
                zIndex: 9999,
              }}
            >
              {this.renderItems()}
            </Picker>
            <Picker
              enabled
              mode="dropdown"
              selectedValue={this.state.selected}
              onValueChange={(val) => this.onValueChange(val)}
              style={{
                width: width / 2 - 10,
                zIndex: 9999,
              }}
            >
              {this.renderItems()}
            </Picker>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 6,
            }}
          >
            <TouchableOpacity onPress={() => this.show("first")}>
              <TextComponent color={Colors.blackHEX} size={FontSize.m}>
                {this.state.startDate != null
                  ? this.state.startDate
                  : "Başlanğıc tarix"}
              </TextComponent>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.show("second")}>
              <TextComponent color={Colors.blackHEX} size={FontSize.m}>
                {this.state.startDate != null
                  ? this.state.startDate
                  : "Son tarix"}
              </TextComponent>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {this.state.show ? (
              <DateTimePicker
                testID="dateTimePicker1"
                value={new Date(1598051730000)}
                mode="countdown"
                is24Hour={true}
                display="default"
                onChange={this.onChange}
              />
            ) : null}
          </View>
          <TextComponent
            color={Colors.blackHEX}
            size={FontSize.xl}
            style={{
              marginVertical: Constants.statusBarHeight,
            }}
          >
            Sərnişin sayı
          </TextComponent>
          <View
            style={{
              marginBottom: Constants.statusBarHeight,
            }}
          >
            <FlatList
              data={this.state.shernisins}
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
            <AntDesign name="search1" size={24} color="white" />
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
