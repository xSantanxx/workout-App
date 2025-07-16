import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Hub</Text>
      <Link href="/about" style={styles.button}>About Screen</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 25,
  },

  button: {
    fontSize: 25,
    textDecorationLine: 'underline',
    color: 'yellow',
    fontWeight: 'bold',
  },
});