import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/welcome/Welcome";
import Loginpage from "../screens/userverify/LoginPage";
import SignupPage from "../screens/userverify/SignupPage";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="splashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splashScreen" component={Welcome} />
        <Stack.Screen name="loginpage" component={Loginpage} />
        <Stack.Screen name="signupPage" component={SignupPage} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
