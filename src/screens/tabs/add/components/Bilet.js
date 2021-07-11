import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TextComponent from "../../../../consts/TextComponent";
import { Colors, FontSize, Styles } from "../../../../consts/Theme";
import {
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

export default function Bilet() {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Hava yolları",
      icon: <FontAwesome name="plane" size={FontSize.xxl} color="white" />,
      nav: "RouteBilet",
      params: {
        type: "air",
      },
    },
    {
      id: 2,
      name: "Dəmir yolları",
      icon: (
        <MaterialIcons
          name="directions-railway"
          size={FontSize.xxl}
          color="white"
        />
      ),
      nav: "RouteBilet",
      params: {
        type: "rail",
      },
    },
    {
      id: 3,
      name: "Şəhərlər arası",
      icon: <FontAwesome5 name="bus" size={FontSize.xxl} color="white" />,
      nav: "RouteBilet",
      params: {
        type: "seher",
      },
    },
    {
      id: 4,
      name: "Parklama",
      icon: (
        <MaterialIcons name="local-parking" size={FontSize.xxl} color="white" />
      ),
      nav: "Parking",
      params: {
        type: "parking",
      },
    },
  ]);
  const navigation = useNavigation();

  function renderItem({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.nav, item.params)}
        style={[Styles.center, styles.item]}
        key={index}
      >
        {item.icon}
        <TextComponent color={Colors.whiteHEX} size={FontSize.xl}>
          {item.name}
        </TextComponent>
        <AntDesign name="arrowright" size={20} color={Colors.grayHEX} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary1HEX} style="light-content" />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayHEX,
    paddingTop: 1,
  },
  item: {
    height: 70,
    backgroundColor: Colors.primary2HEX,
    marginBottom: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: width,
  },
});
