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
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

export default function Balance() {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Balansı artır",
      icon: (
        <MaterialIcons
          name="account-balance-wallet"
          size={FontSize.xxl}
          color="#fff"
        />
      ),
      nav: "AddToBalance",
      params: {
        other: false,
      },
    },
    {
      id: 2,
      name: "Başqasının balansını artır",
      icon: <Feather name="send" size={FontSize.xxl} color="#fff" />,
      nav: "AddToBalance",
      params: {
        other: true,
      },
    },
  ]);
  const navigation = useNavigation();

  function renderItem({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.nav, item.params)}
        style={[Styles.center, styles.item]}
        key={index.toString()}
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
