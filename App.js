import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { colors } from "./src/components/Keyboard/constants";
import Game from './src/components/Game';




export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <Text style={styles.title}> WORDQUEST</Text>

      <Game />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },

  title: {
    color: colors.grey,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
    marginTop: "10%",
  },

});
