import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import LottieView from "lottie-react-native";

export default class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {
          id: 1,
          title: "Nfc vasitəsilə ödəniş edin",
          description:
            "Əgər telefonunuz NFC dəstəkləyirisə o zaman NFC vasitəsilə ",
          filename: "nfc",
        },
        {
          id: 2,
          title: "Kartınızdan məbləği köçürün",
          description: "Məbləği ödəniş kartı vasitəsilə ödəyin",
          filename: "paycard",
        },
      ],
    };
  }

  componentDidMount() {
    this.animation.play();
  }

  renderItem({ item, index }) {
    return (
      <LottieView
        ref={(animation) => {
          this.animation = animation;
        }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#eee",
        }}
        source={require("../../../animations/" + item.filename + ".json")}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
    );
  }

  render() {
    return <View style={styles.animationContainer}></View>;
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
