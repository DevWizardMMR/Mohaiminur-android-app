import { View } from "react-native";
import { styles } from "../styles";

const BottomModal = ({ children }) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"white",
          paddingVertical:50,
          borderTopEndRadius:50,
          borderTopLeftRadius:50,
        }}
      >
        {children}
      </View>
    </>
  );
};

export default BottomModal;
