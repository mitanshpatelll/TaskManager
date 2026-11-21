import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CreateButton = ({ onPress }: { onPress: () => void }) => {
  const safeAreaBottomInset: number = useSafeAreaInsets().bottom || 0;
  return (
    <View>
      <View
        style={[styles.flowtingButton, { marginBottom: safeAreaBottomInset }]}
      >
        <Pressable style={styles.Btn} onPress={onPress}>
          <Text style={styles.BtnText}>Add Task</Text>
        </Pressable>
      </View>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.5)", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.maskedGradient}
      />
    </View>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
  flowtingButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
  },
  Btn: {
    marginHorizontal: 20,
    margin: 0,
    flex: 1,
    backgroundColor: "red",
    borderRadius: 50,
    borderCurve: "continuous",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  BtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  maskedGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  },
});
