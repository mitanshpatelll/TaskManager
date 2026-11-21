import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CreateButton from "./CreateButton";
import FormData from "./FormData";
import TimeList from "./TimeList";
import TitleBar from "./TitleBar";

const Header = () => {
  const safeAreaTopInset: number = useSafeAreaInsets().top || 0;

  const [createTask, setCreateTask] = useState<boolean>(false);

  return (
    <View style={[styles.conatiner, { paddingTop: safeAreaTopInset }]}>
      <View style={styles.header}>
        <TitleBar />
        {/* <TimeColumn /> */}
      </View>
      <View style={styles.timelistcontainer}>
        <TimeList />
      </View>
      <CreateButton onPress={() => setCreateTask(true)} />
      <FormData visible={createTask} closeBtn={() => setCreateTask(false)} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#010101",
  },
  header: {
    flexDirection: "column",
  },
  timelistcontainer: {
    flex: 1,
  },
});
