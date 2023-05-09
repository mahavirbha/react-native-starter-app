import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ addGoalHandler, modalVisible, setModalVisisble }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/goalimage.jpg")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="Cancel"
            color="#f31282"
            onPress={() => setModalVisisble(false)}
          />

          <Button
            title="Add Goal"
            color="#9754ef"
            onPress={() => {
              setModalVisisble(false);
              addGoalHandler(enteredGoalText);
              setEnteredGoalText("");
            }}
            disabled={enteredGoalText.length <= 0}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 8,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 4,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
    width: "100%",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 8,
  },
});

export default GoalInput;
