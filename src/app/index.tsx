import { StyleSheet } from "react-native";
import Home from "../features/screens/Home";


export default function Index() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
