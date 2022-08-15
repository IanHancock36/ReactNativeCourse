import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [myGoals,setMyGoals] =useState([])

  function goalInputHandler(enteredText) {
setEnteredGoalText(enteredText)

  };
  function addGoalHandler() { 
    setMyGoals((currentGoals) => [...currentGoals,enteredGoalText])
    console.log(enteredGoalText)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder='The Goals' onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of the goals.....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    borderRadius: 10,
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
