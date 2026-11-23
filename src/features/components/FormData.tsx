import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CreateButton from "./CreateButton";
import DateTimePickerCmp from "./DateTimePicker";
import { useState } from "react";

const FormData = ({ closeBtn }: { closeBtn: () => void }) => {
  const safeAreaBottomInset: number = useSafeAreaInsets().bottom || 0;
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  return (
    <View style={[styles.formContainer, { bottom: safeAreaBottomInset }]}>
      <Text style={styles.formTitle}>Create Task</Text>
      <Pressable onPress={closeBtn} style={styles.closeBtn}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>x</Text>
      </Pressable>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          color: "white",
        }}
        placeholder="Task Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          color: "white",
        }}
        placeholder="Task Name"
        placeholderTextColor="gray"
      />
      <DateTimePickerCmp
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <CreateButton
        onFrom={true}
        onPress={() => console.log("Create button pressed")}
      />
      <View style={styles.formHolder}></View>
    </View>
  );
};

export default FormData;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "gray",
    overflow: "hidden",
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
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    marginTop: 20,
    marginLeft: 20,
  },
});
