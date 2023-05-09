import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={(pressed) => (pressed == true ? styles.pressedItem : {})}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 4,
    backgroundColor: "#5e0accbb",
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalItemText: {
    color: "#FFF",
    padding: 8,
  },
});
