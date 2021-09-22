import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Home, Login, Logup } from './src/screens';

const isAndroid = Platform.OS === 'android',
barHeight = StatusBar.currentHeight,
styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: isAndroid ? barHeight : 0
  }
});

const Stack = createNativeStackNavigator();

export default function App() {

  const [loadedFonts] = useFonts({
    'Ubuntu': Ubuntu_400Regular,
    'Ubuntu Bold': Ubuntu_700Bold
  });

  return ( loadedFonts &&
    <NavigationContainer>
      <View style={styles.mainContainer}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="logup" component={Logup}/>
          <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );

};
