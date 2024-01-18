import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from './components';
import {Stack, useRouter} from 'expo-router'

export default function App() {

  const router = useRouter();


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!
        Dude this is so cool!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//expo-cli start --tunnel

