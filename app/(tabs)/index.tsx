import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
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
  imageContainer: {
    flex: 1,
    marginTop: 20,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 10,
  },
});