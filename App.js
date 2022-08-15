import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='The Goals' />
        <Button title = "Add Goal"/>
        </View>
      <View>
        <Text>List of the goals.....</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
   
  },
  inputContainer:{
    flexDirection:'row'
  }
});
