import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import UserDashboard from "../screens/dashboard/UserDashboard";

const RootNavigator = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <>
      <RootNavigator.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="start"
      >
        <RootNavigator.Screen name="welcome" component={AuthStack} />
        <RootNavigator.Screen name="Home" component={UserDashboard} />
      </RootNavigator.Navigator>
    </>
  );
};

export default RootNavigation;
