import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import UserDashboard from "../screens/dashboard/UserDashboard";
import UserDashboardMain from "./UserDashboardMain";

const RootNavigator = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <>
      <RootNavigator.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="welcome"
      >
        <RootNavigator.Screen name="welcome" component={AuthStack} />
        <RootNavigator.Screen name="Home" component={UserDashboardMain} />
      </RootNavigator.Navigator>
    </>
  );
};

export default RootNavigation;
