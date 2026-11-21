import { FlatList, StyleSheet, Text, View } from "react-native";

const hours24 = Array.from({ length: 24 }, (_, i) => {
  const period = i < 12 ? "AM" : "PM";
  const hour = i % 12 === 0 ? 12 : i % 12;
  return `${hour}:00 ${period}`;
});

const TimeList = () => {
  const renderItem = ({ item }: { item: string }) => {
    const isLastItem = item == hours24[hours24.length - 1];
    return (
      <View
        style={[styles.itemContainer, isLastItem && styles.itemLastContainer]}
      >
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={hours24}
      renderItem={({ item }) => renderItem({ item })}
      style={styles.mainContainer}
    />
  );
};

export default TimeList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "green",
  },
  itemContainer: {
    height: 100,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemLastContainer: {
    borderBottomWidth: 0,
  },
  itemText: {
    position: "absolute",
    fontSize: 16,
  },
});
