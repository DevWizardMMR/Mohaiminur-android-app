import { View, Text, TouchableOpacity } from "react-native";
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

const Loginpage = ({navigation}) => {
  const submitLogin = (data: object, action: object) => {
    // console.log(data);
    fetch("https://provisit-server-hgt4wzsly-developermmr.vercel.app/")
      .then((res) => res.json())
      .then((data) => console.log(data));
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
                <TouchableOpacity style={{ width: "50%" }} onPress={()=>{navigation.navigate("signupPage")}}>
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
              </View>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
};

export default Loginpage;
