import { View, Text, TextInput, Alert } from "react-native";
import { styles } from "../../theme/styles";
import { Formik } from "formik";
import PrimaryButton from "../../theme/button/PrimaryButton";
import AxiosFetch from "../../hook/AxiosFetch";

const SignupPage = ({ navigation }) => {
  const axiosInstance = AxiosFetch();

  const onSubmitsignup = async (data: any, action: any) => {
    if (
      data.name &&
      data.email &&
      data.password &&
      data.picture &&
      data.phone
    ) {
      const result = await axiosInstance.post("/createuseraccount", data);
      if (result.data.insertedId) {
        Alert.alert(
          "Congratulations",
          "Your brand new account has been successfully created, opening the door to a world of endless possibilities"
        );
      }
      navigation.navigate("loginpage");
    } else {
      Alert.alert(
        "Please review your input before submitting",
        "Ensure that all input fields are filled, and no empty fields are left in the form."
      );
    }
  };

  return (
    <>
      <View style={styles.containerCenter}>
        <Text style={styles.title}>Create New Account</Text>
        <View style={{ width: "80%", marginVertical: 20 }}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              picture: "",
              phone: "",
            }}
            onSubmit={(values: any, action) => {
              onSubmitsignup(values, action);
            }}
          >
            {({ handleBlur, values, handleChange, handleSubmit }) => (
              <View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Email Address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <TextInput
                  secureTextEntry={true}
                  style={styles.textInput}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Image URL"
                  onChangeText={handleChange("picture")}
                  onBlur={handleBlur("picture")}
                  value={values.picture}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone Number"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
                <PrimaryButton
                  title="create account"
                  clickEvent={handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
};

export default SignupPage;
