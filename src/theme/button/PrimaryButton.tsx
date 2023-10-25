import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../theme/styles";
const PrimaryButton = ({title, clickEvent}) => {
  return (
    <>
      <TouchableOpacity style={styles.PrimaryButton} onPress={clickEvent}>
        <Text style={{textAlign:"center", color:"white", fontFamily:"font-inter"}}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};
export default PrimaryButton;
