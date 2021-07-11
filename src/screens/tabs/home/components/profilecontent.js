import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  StatusBar,
} from "react-native";
import TextComponent from "../../../../consts/TextComponent";
import { Styles, Colors, FontSize } from "../../../../consts/Theme";
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import Constants from "expo-constants";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

export default function ProfileContent() {
  const [data, setData] = React.useState([
    // {
    //   id: 4,
    //   name: "Kartlar",
    //   function: null,
    //   nav: "UserCards",
    //   icon: <FontAwesome name="credit-card-alt" size={35} color="black" />,
    // },
    {
      id: 5,
      name: "Qr",
      function: () => qrcreate(),
      icon: <Ionicons name="qr-code" size={35} color="black" />,
    },
    {
      id: 1,
      name: "Digital card",
      function: () => digit(),
      icon: <MaterialCommunityIcons name="card-plus" size={35} color="black" />,
    },
    {
      id: 2,
      name: "Dil",
      function: () => changelang(),
      icon: <FontAwesome name="language" size={35} color="black" />,
    },
    {
      id: 3,
      name: "Çıxış",
      function: () => logout(),
      icon: <AntDesign name="logout" size={35} color="black" />,
    },
  ]);
  const [modal, setModal] = React.useState(false);
  const navigation = useNavigation();

  function digit() {
    console.log("digital card");
  }

  function changelang() {
    console.log("lang");
  }

  function logout() {
    console.log("logout");
  }

  function qrcreate() {
    setModal(true);
  }

  function renderFunction({ item, index }) {
    return (
      <TouchableOpacity
        key={index}
        style={[
          Styles.shadow,
          Styles.center,
          {
            width: width / 2 - 50,
            height: 120,
            backgroundColor: "white",
            borderRadius: 15,
            margin: 10,
            zIndex: 3,
          },
        ]}
        onPress={() =>
          item.function != null
            ? item.function()
            : navigation.navigate(item.nav)
        }
      >
        {item.icon}
        <TextComponent
          size={FontSize.l}
          color={Colors.blackHEX}
          family="Raleway_bold"
          style={{
            paddingTop: 5,
          }}
        >
          {item.name}
        </TextComponent>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <TextComponent
        color={Colors.blackHEX}
        size={FontSize.m}
        style={{ paddingLeft: 5, marginVertical: 15, zIndex: 1 }}
        family="Raleway_bold"
      >
        Profile Operations
      </TextComponent>

      <FlatList
        data={data}
        renderItem={renderFunction}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        style={{
          flex: 1,
          paddingHorizontal: Constants.statusBarHeight,
        }}
      />
      <Modal
        visible={modal}
        style={{
          backgroundColor: Colors.primary1HEX,
        }}
      >
        <StatusBar
          backgroundColor={Colors.primary1HEX}
          barStyle="light-content"
        />
        <View
          style={[
            Styles.center,
            {
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-around",
              backgroundColor: Colors.primary1HEX,
            },
          ]}
        >
          <TouchableOpacity onPress={() => setModal(false)}>
            <FontAwesome5 name="times" size={30} color="white" />
          </TouchableOpacity>

          <QRCode
            value="Just some string value"
            logoBackgroundColor="transparent"
            size={width - 50}
            backgroundColor={Colors.primary1HEX}
            color={Colors.whiteHEX}
          />
          <View />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.whiteHEX,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
