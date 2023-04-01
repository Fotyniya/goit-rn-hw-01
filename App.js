import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
//import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './assets/Screens/LoginScreen';
import RegistrationScreen from './assets/Screens/RegistrationScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/Fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/Fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
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
  text: {
    color: 'green',
    fontSize: 20,
  }
});
