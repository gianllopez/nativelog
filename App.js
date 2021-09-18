import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/screens';

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
  return (
    <NavigationContainer>
      <View style={styles.mainContainer}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};
