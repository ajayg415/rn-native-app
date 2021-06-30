import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = () => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.primary}
    />
  );
};

export default CustomHeaderButton