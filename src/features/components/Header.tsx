import { StyleSheet, View } from "react-native";
import TimeColumn from "./TimeColumn";
import TitleBar from "./TitleBar";

const Header = () => {
  return (
    <View style={styles.header}>
      <TitleBar />
      <TimeColumn />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    flex: 1,
  },
});
