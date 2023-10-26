import { View, Text, TouchableOpacity, Alert } from "react-native";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../../theme/styles";
import PrimaryButton from "../../theme/button/PrimaryButton";
import AxiosFetch from "../../hook/AxiosFetch";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Loginpage = ({ navigation }) => {
  const axiosInstance = AxiosFetch();
  const submitLogin = async (data: any, action: any) => {
    await axiosInstance(
      `finduser?email=${data.email}&pass=${data.password}`
    ).then((response) => {
      if (response.data.user !== null) {
        axiosInstance
          .post("/createjsontoken", response.data)
          .then((res) => {
            if(res.data.token){
              const stringify = JSON.stringify(res.data.token)
              AsyncStorage.setItem("userToken",stringify);
              Alert.alert("Login account successfully","Welcome to user Dashboard");
              navigation.navigate("Home");
              action.resetForm();
            };
          });
      } else {
        Alert.alert(
          "No user found!",
          "Sorry, no user found in the database. Feel free to create a new user account."
        );
      }
    });
  };

  return (
    <>
      <View style={styles.containerCenter}>
        <Text style={styles.title}>Login Account</Text>
        <View style={{ width: "80%", marginVertical: 30 }}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, action) => {
              submitLogin(values, action);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email Address"
                />
                <TextInput
                  secureTextEntry={true}
                  style={styles.textInput}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="password"
                />
                <PrimaryButton title="Login" clickEvent={handleSubmit} />
                <TouchableOpacity style={{ marginTop: 20, width: "50%" }}>
                  <Text
                    style={{
                      marginVertical: 5,
                      color: "red",
                      fontFamily: "font-raleway",
                      fontSize: 13,
                    }}
                  >
                    Reset Your Password
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ width: "50%" }}
                  onPress={() => {
                    navigation.navigate("signupPage");
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontFamily: "font-mooli",
                      fontSize: 18,
                    }}
                  >
                    Create new account
                  </Text>
                </TouchableOpacity>
                <Text onPress={()=>navigation.navigate("Home")} style={{marginTop:30, fontFamily:"font-mooli", color:"green"}}>Skip Login</Text>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
};

export default Loginpage;
