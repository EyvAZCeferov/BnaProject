import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import TextComponent from "../../../../consts/TextComponent";
import { Styles, Colors, FontSize } from "../../../../consts/Theme";
import {
  MaterialCommunityIcons,
  AntDesign,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get("window");

const RecentOperations = (props) => {
  // ref
  const bottomSheetRef = useRef(BottomSheet);
  const [funcs, setFuncs] = useState([
    {
      id: 1,
      name: "Metro",
      icon: <Fontisto name="metro" size={20} color={Colors.whiteHEX} />,
      date: "2021-08-05",
      price: 0.3,
    },
    {
      id: 2,
      name: "Bus",
      icon: <FontAwesome5 name="bus" size={20} color={Colors.whiteHEX} />,
      date: "2021-08-06",
      price: 0.3,
    },
    {
      id: 3,
      name: "Quba",
      icon: (
        <MaterialCommunityIcons
          name="bus-side"
          size={20}
          color={Colors.whiteHEX}
        />
      ),
      date: "2021-08-09",
      price: 8.0,
    },
  ]);
  const navigation = useNavigation();


  // variables
  const snapPoints = useMemo(() => ["75%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  function renderItem({ item, index }) {
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
            marginVertical: 3,
            flexDirection: "row",
            justifyContent: "space-around",
          },
        ]}
        onPress={() =>
          navigation.navigate("OneOperation", {
            id: item.id,
          })
        }
      >
        {item.icon}
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
          {item.type !== "get" ? (
            <AntDesign name="arrowup" size={24} color={Colors.errorHEX} />
          ) : (
            <AntDesign name="arrowdown" size={24} color={Colors.successHEX} />
          )}
          {item.price} ₼
        </TextComponent>
      </TouchableOpacity>
    );
  }

  // renders
  return (
    <View style={styles.container}>
      {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableContentPanningGesture={true}
        scrollEnabled={true}
        style={[
          Styles.center,
          {
            backgroundColor: Colors.grayHEX,
            paddingTop: 15,
          },
        ]}
      > */}
      <FlatList
        data={funcs}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        vertical={true}
        scrollEnabled={true}
      />
      {/* </BottomSheet> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default RecentOperations;
