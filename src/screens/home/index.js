import React, { useContext } from 'react';
import { Alert, Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../../App';
import { GithubLogo, LogOutIcon } from '../../shared/components/vectors';
import styles from './styles';

const homeIcon = require('../../assets/home-icon.png');

export function Home() {

  const { removeToken } = useContext(AuthContext);

  const logOut = () => {
    Alert.alert(
      'Confirm', 'Are you sure you want to log out?',
      [
        {
          text: 'Yes, log out',
          onPress: async () => await removeToken()
        },
        { text: 'No, cancel' }
      ]
    );
  };

  const toSourceCode = () => {
    let repo = 'https://github.com/gianlop3z/nativelog';
    Linking.openURL(repo)
      .catch(err => alert('An error has ocurred:', err));
  };

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeText}>
        Thanks for testing {}
        <Text style={{ fontWeight: 'bold' }}>
          nativelog
        </Text>
      </Text>
      <Image source={homeIcon} style={styles.homeImage}/>
      <Text style={styles.description}>
        This is a simple user log system made with {}
        <Text style={{ fontWeight: 'bold' }}>
          React Native
        </Text> and {}
        <Text style={{ fontWeight: 'bold' }}>
          Node.js + Express.js
        </Text>
      </Text>
      <TouchableOpacity
        style={styles.srcButton}
        activeOpacity={0.7}
        onPress={toSourceCode}
      >
        <Text style={styles.srcButtonText}>Go to source code</Text>
        <GithubLogo/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logOutBtn}
        activeOpacity={0.7}
        onPress={logOut}
      >
        <LogOutIcon/>
      </TouchableOpacity>
    </View>
  );

};