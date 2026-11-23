import DateTimePicker from "@expo/ui/community/datetime-picker";
import { Text, View } from "react-native";

const DateTimePickerCmp = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}) => {
  return (
    <View>
      <Text>Starting Date-Time</Text>
      {/* {show && ( */}
      <DateTimePicker
        value={startDate}
        mode="datetime"
        display="default"
        onValueChange={(event, selectedDate) => {
          setStartDate(selectedDate);
          console.log("Selected Date:", selectedDate);
        }}
        minimumDate={new Date()}
      />
      <Text>TO Date-Time</Text>
      <DateTimePicker
        value={endDate}
        mode="datetime"
        display="default"
        onValueChange={(event, selectedDate) => {
          setEndDate(selectedDate);
          console.log("Selected Date:", selectedDate);
        }}
        minimumDate={new Date()}
      />
      {/* )} */}
    </View>
  );
};

export default DateTimePickerCmp;
