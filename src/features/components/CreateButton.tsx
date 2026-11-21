import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
let safeAreaBottomInset;
const CreateButton = () => {
  safeAreaBottomInset = useSafeAreaInsets().bottom;
  return (
    <View style={styles.flowtingButton}>
      <View style={styles.Btn}>
        <Text>CreateButton</Text>
      </View>
    </View>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
  flowtingButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    paddingBottom: safeAreaBottomInset,
  },
  Btn: {
    margin: 10,
    flex: 1,
    backgroundColor: "red",
  },
});
