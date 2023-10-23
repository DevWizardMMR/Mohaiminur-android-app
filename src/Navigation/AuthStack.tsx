import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/welcome/Welcome";
import Loginpage from "../screens/userverify/LoginPage";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="splashScreen"
        screenOptions={{ headerShown: false}}
      >
        <Stack.Screen name="splashScreen" component={Welcome} />
        <Stack.Screen name="loginpage" component={Loginpage} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
