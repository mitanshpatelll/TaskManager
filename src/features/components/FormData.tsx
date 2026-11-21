import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FormData = ({ closeBtn }: { closeBtn: () => void }) => {
  const safeAreaBottomInset: number = useSafeAreaInsets().bottom || 0;

  return (
    <View style={[styles.formContainer, { bottom: safeAreaBottomInset }]}>
      <Text>Create Task</Text>
      <Pressable onPress={closeBtn} style={styles.closeBtn}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>x</Text>
      </Pressable>

      <View style={styles.formHolder}></View>
    </View>
  );
};

export default FormData;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "blue",
    height: 500,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 2,
    margin: 10,
    marginBottom: 0,
    borderRadius: 24,
    borderCurve: "continuous",
  },
  formHolder: {
    flex: 1,
    backgroundColor: "red",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 10,
  },
});
