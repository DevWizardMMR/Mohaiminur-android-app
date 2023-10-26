import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/welcome/Welcome";
import Loginpage from "../screens/userverify/LoginPage";
import SignupPage from "../screens/userverify/SignupPage";
import WelcomeOne from "../screens/welcome/WelcomeOne";
import WelcomeTwo from "../screens/welcome/WelcomeTow";
import WelcomeThree from "../screens/welcome/WelcomeThree";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="splashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splashScreen" component={Welcome} />
        <Stack.Screen name="welcomeOne" component={WelcomeOne} />
        <Stack.Screen name="welcomeTwo" component={WelcomeTwo} />
        <Stack.Screen name="welcomeThree" component={WelcomeThree} />
        <Stack.Screen name="loginpage" component={Loginpage} />
        <Stack.Screen name="signupPage" component={SignupPage} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
