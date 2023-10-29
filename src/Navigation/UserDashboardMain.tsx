import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserDashboard from "../screens/dashboard/UserDashboard";
import SignupPage from "../screens/userverify/SignupPage";
import Icon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Loginpage from "../screens/userverify/LoginPage";

const Tab = createBottomTabNavigator();

const UserDashboardMain = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="userDashboardHome"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            height: 80,
            paddingBottom: 15,
            paddingTop: 15,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          },
        }}
      >
        <Tab.Screen
          name="userDashboardHome"
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: () => <Icon name="home" size={25} color="red" />,
          }}
          component={UserDashboard}
        />
        <Tab.Screen
          name="Create"
          component={Loginpage}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <Feather
                name="plus"
                size={30}
                color="white"
                style={{
                  backgroundColor: "blue",
                  position: "absolute",
                  borderRadius: 50,
                  borderColor: "#ededed",
                  borderWidth: 5,
                  bottom: 5,
                  paddingLeft: 20,
                  paddingTop: 20,
                  paddingBottom: 12,
                  paddingRight: 12,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="signuppage"
          options={{
            tabBarLabel: "Create Event",
            tabBarIcon: () => <Ionicons name="create" size={25} color="red" />,
          }}
          component={SignupPage}
        />
      </Tab.Navigator>
    </>
  );
};

export default UserDashboardMain;
