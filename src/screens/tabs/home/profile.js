import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Colors, Styles, FontSize } from "../../../consts/Theme";
import Constants from "expo-constants";
import TextComponent from "../../../consts/TextComponent";
import { Ionicons, AntDesign, Feather, Octicons } from "@expo/vector-icons";
import ProfileContent from "./components/profilecontent";

const { width, height } = Dimensions.get("window");

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert(t("permNotReqCam"));
    }
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  _pickImage = async () => {
    try {
      const options = {
        maxWidth: 2000,
        maxHeight: 2000,
        storageOptions: {
          skipBackup: true,
        },
      };

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.7,
        base64: false,
        options: options,
      });

      if (result.cancelled) {
        return false;
      }

      this.setState({ isReady: false });
      const response = await fetch(result.uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref("users")
        .child("/user_" + this.state.user.uid + ".png");
      ref.put(blob).on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (data) => {},
        () => {
          firebase
            .storage()
            .ref("users/user_" + this.state.user.uid + ".png")
            .snapshot.ref.getDownloadURL()
            .then(function (downloadURL) {
              downpp = downloadURL;
              this.setState({ isReady: false });
            });
        }
      );

      ref.getDownloadURL().then(async (url) => {
        this.setState({ isReady: false });
        var formData = new FormData();
        formData.append("image", url);
        await axios.post("auth/update_photo", formData).then((e) => {
          this.getInfo();
        });
      });
      this.setState({ isReady: false });
      this.getInfo();
    } catch (e) {
      console.log(e.message);
    }
    this.setState({ isReady: true });
  };

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
            Profile
          </TextComponent>
          <View />
        </View>
        <View style={[styles.content, Styles.center]}>
          <View style={[{ flex: 0.2, width: width - 20 }, Styles.center]}>
            <TouchableOpacity
              style={[
                Styles.center,
                Styles.shadow,
                {
                  width: 130,
                  height: 130,
                  backgroundColor: Colors.primary1HEX,
                  borderRadius: 90,
                },
              ]}
            >
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png",
                }}
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "white",
                  borderRadius: 45,
                }}
              />
              <TouchableOpacity
                style={[
                  Styles.center,
                  {
                    position: "absolute",
                    bottom: 1,
                    backgroundColor: "white",
                    width: 33,
                    height: 33,
                    borderRadius: 10,
                  },
                ]}
                onPress={() => this._pickImage()}
              >
                <Feather name="edit-2" size={18} color="black" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.8,
              width: width,
              paddingTop: Constants.statusBarHeight,
            }}
          >
            <ProfileContent />
          </View>
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
});
