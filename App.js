import React, { useState, useMemo, useEffect, Fragment } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Home, Login, Logup } from './src/screens';
import styles from './styles';
import { get, write, remove } from './src/shared/utils/token-store';

const Stack = createNativeStackNavigator();

export const AuthContext = React.createContext({});

export default function App() {

  const [token, setToken] = useState(null);

  const context = useMemo(() => ({
    writeToken: async value => {
      await write(value);
      setToken(value);
    },
    removeToken: async () => {
      await remove();
      setToken(null);
    }
  }), []);

  useEffect(() => {
    console.log(token);
  }, [token]);

  const [loadedFonts] = useFonts({
    'Ubuntu': Ubuntu_400Regular,
    'Ubuntu Bold': Ubuntu_700Bold
  });

  return ( loadedFonts &&
    <NavigationContainer>
      <View style={styles.mainContainer}>
        <AuthContext.Provider value={context}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            { token ?
              <Stack.Screen name="home" component={Home}/> :
              <Fragment>
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="logup" component={Logup}/>
              </Fragment> }
          </Stack.Navigator>
        </AuthContext.Provider>
      </View>
    </NavigationContainer>
  );

};
