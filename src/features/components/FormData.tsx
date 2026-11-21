import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FormData = ({
  visible,
  closeBtn,
}: {
  visible: boolean;
  closeBtn: () => void;
}) => {
  const safeAreaBottomInset: number = useSafeAreaInsets().bottom || 0;

  return (
    <View
      style={{
        display: visible ? "flex" : "none",
        backgroundColor: "blue",
        height: 500,
        position: "absolute",
        bottom: safeAreaBottomInset,
        left: 0,
        right: 0,
        zIndex: 2,
        margin: 10,
        marginBottom: 0,
        borderRadius: 24,
        borderCurve: "continuous",
      }}
    >
      <Text>FormData</Text>
      <Pressable
        onPress={closeBtn}
        style={{ position: "absolute", top: 10, right: 20 }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>x</Text>
      </Pressable>
    </View>
  );
};

export default FormData;
