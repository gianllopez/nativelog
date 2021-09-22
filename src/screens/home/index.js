import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GithubLogo } from '../../shared/utils/vectors';

const homeIcon = require('../../assets/home-icon.png');

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  homeText: {
    fontFamily: 'Ubuntu',
    fontSize: 27
  },
  homeImage: {
    width: 125, height: 125,
    marginVertical: 10
  },
  description: {    
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    fontSize: 18,
    width: '95%'
  },
  srcButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D1117',
    width: '90%',
    marginTop: 10,
    borderRadius: 7,
    height: 50
  },
  srcButtonText: {
    fontFamily: 'Ubuntu Bold',
    color: 'white',
    marginRight: 10,
    fontSize: 20
  }
});

export function Home() {
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
      <TouchableOpacity style={styles.srcButton} activeOpacity={0.7}>
        <Text style={styles.srcButtonText}>Go to source code</Text>
        <GithubLogo/>
      </TouchableOpacity>
    </View>
  );
};