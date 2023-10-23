import {View, Text, StyleSheet} from "react-native"

const Loginpage = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login Account</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        fontFamily:"font-mooli",
        fontSize:15
    }
})

export default Loginpage;
