import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserDashboard from "../screens/dashboard/UserDashboard";
import SignupPage from "../screens/userverify/SignupPage";
import Icon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

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
            bottom: 20,
            right: 20,
            left: 20,
            height: 70,
            borderRadius: 10,
          },
        }}
      >
        <Tab.Screen
          name="userDashboardHome"
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: () => <Icon name="home" size={25} color="red" />,
            tabBarLabelPosition: "beside-icon",
          }}
          component={UserDashboard}
        />
        <Tab.Screen
          name="signuppage"
          options={{
            tabBarLabel: "Create Event",
            tabBarIcon: () => <Ionicons name="create" size={25} color="red" />,
            tabBarLabelPosition: "beside-icon",
          }}
          component={SignupPage}
        />
      </Tab.Navigator>
    </>
  );
};

export default UserDashboardMain;
