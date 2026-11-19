import { StyleSheet, Text, View } from "react-native";

const TitleBar = () => {
  return (
    <View style={styles.titleBar}>
      <Text style={styles.titleText}>Title Bar</Text>
    </View>
  );
};

export default TitleBar;

const styles = StyleSheet.create({
  titleBar: {
    padding: 16,
    height: 60,
    backgroundColor: "#010101",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
