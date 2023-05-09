import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import uuid from "react-native-uuid";
import GoalInput from "./components/goalinput";
import GoalItem from "./components/goalitem";

export default function App() {
  const [modalVisible, setModalVisisble] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: uuid.v4() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id != id)
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#9754ef"
          onPress={() => setModalVisisble(true)}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          modalVisible={modalVisible}
          setModalVisisble={setModalVisisble}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView> */}
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
          ></FlatList>
          {/* </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
    paddingTop: 16,
  },
});
