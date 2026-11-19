import { View } from "react-native";
import TimeColumn from "./TimeColumn";
import TitleBar from "./TitleBar";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "top",
        flex: 1,
      }}
    >
      <TitleBar />
      <TimeColumn />
    </View>
  );
};

export default Header;
