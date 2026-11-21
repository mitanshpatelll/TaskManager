import { StyleSheet, View } from "react-native";
import CreateButton from "./CreateButton";
import TimeList from "./TimeList";
import TitleBar from "./TitleBar";

const Header = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <TitleBar />
        {/* <TimeColumn /> */}
      </View>
      <View style={styles.timelistcontainer}>
        <TimeList />
      </View>
      <CreateButton />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "red",
  },
  header: {
    flexDirection: "column",
  },
  timelistcontainer: {
    flex: 1,
  },
});
