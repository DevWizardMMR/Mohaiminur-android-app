import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import BottomModal from "../../theme/modal/Bottom";
import Icon from "react-native-vector-icons/AntDesign";

const WelcomeThree = ({navigation}) => {
  return (
    <>
      <View style={{ position: "relative", height: "100%" }}>
        <Image
          style={{ width: "100%", height: "80%", marginTop: 60 }}
          source={require("../../../assets/images/FrameThree.png")}
          resizeMode="cover"
          blurRadius={0.7}
        />
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
                Seamlessly Organize Your Visits and Tasks
              </Text>
              <Text style={{ textAlign: "center" }}>
                All-in-one Visit & Task Management application to boost your
                productivity and make your workflow smoother.
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
                  onPress={() => navigation.navigate("loginpage")}
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
export default WelcomeThree;
