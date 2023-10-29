import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserDashboard from "../screens/dashboard/UserDashboard";
import SignupPage from "../screens/userverify/SignupPage";

const Tab = createBottomTabNavigator();

const UserDashboardMain = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="userDashboardHome">
        <Tab.Screen name="userDashboardHome" component={UserDashboard} />
        <Tab.Screen name="signuppage" component={SignupPage} />
      </Tab.Navigator>
    </>
  );
};

export default UserDashboardMain;
