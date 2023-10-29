import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import IcoSimpleLineIconsn from "react-native-vector-icons/SimpleLineIcons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const UserDashboard = () => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            marginTop: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={styles.icon}>S</Text>
            <View>
              <Text style={{ fontSize: 15, fontFamily: "font-raleway" }}>
                Workspace
              </Text>
              <Text
                style={{ fontSize: 20, fontFamily: "font-inter", opacity: 0.5 }}
              >
                SalesForce
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
            }}
          >
            <View>
              <Icon name="keyboard-arrow-up" size={20} color="black" />
              <Icon name="keyboard-arrow-down" size={20} color="black" />
            </View>
            <Icons name="bell-outline" size={20} color="black" />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "font-inter", fontSize: 25, width: "60%" }}
          >
            Let’s Manage & Track your Visits
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 50,
              gap: 5,
            }}
          >
            <IcoSimpleLineIconsn name="location-pin" size={20} color="blue" />
            <Text style={{ color: "blue", fontFamily:"font-inter" }}>Day Start</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#00316E",
    width: "auto",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 25,
    color: "white",
    fontFamily: "font-inter",
  },
});

export default UserDashboard;
