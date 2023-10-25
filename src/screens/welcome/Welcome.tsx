import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../theme/colors";

const Welcome = ({ navigation }) => {
  return (
    <>
      <LinearGradient
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        colors={colors.light.linear2}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
        >
          <Image
            source={{
              uri: "https://provisitapp.com/assets/img/app-mobile-image-3.png",
              width: 150,
              height: 150,
            }}
          />
          <Text style={{ fontFamily: "font-mooli", letterSpacing: 4 }}>
            P R O V I S I T
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("loginpage");
            }}
          >
            <Text style={{ fontFamily: "font-mooli", color: "red" }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default Welcome;
