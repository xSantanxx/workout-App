import {View, StyleSheet} from 'react-native';
import {Link, Stack} from 'expo-router';

export default function NotFoundScreen(){
    return(
        <>
        <Stack.Screen options={{title: 'Oops! Not Found'}}></Stack.Screen>
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
            Go back to Home Screen
            </Link>
        </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});