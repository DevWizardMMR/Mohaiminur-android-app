import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import BottomModal from "../../theme/modal/Bottom";
import Icon from "react-native-vector-icons/AntDesign";

const WelcomeTwo = ({ navigation }) => {
  return (
    <>
      <View style={{ position: "relative", height: "100%" }}>
        <View
          style={{
            marginHorizontal: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 60,
          }}
        >
          <Image
            style={{ width: 400, height: 600 }}
            source={require("../../../assets/images/FrameTwo.png")}
            resizeMode="cover"
            blurRadius={0.7}
          />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            shadowColor: "white",
            elevation: 5,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}
        >
          <BottomModal>
            <View style={{ marginHorizontal: 30 }}>
              <Text style={{ textAlign: "center", fontSize: 30 }}>
                Smooth Check in Check out Process
              </Text>
              <Text style={{ textAlign: "center" }}>
                Say goodbye to hassles and delays as you breeze through seamless
                check in and Check out.
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 40,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("welcomeThree")}
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 5,
                    backgroundColor: "#00316E",
                    paddingHorizontal: 40,
                    paddingVertical: 10,
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: "white", fontFamily: "font-mooli" }}>
                    Get Started
                  </Text>
                  <Icon name="arrowright" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </BottomModal>
        </View>
      </View>
    </>
  );
};

export default WelcomeTwo;
