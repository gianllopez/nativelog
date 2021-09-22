import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GithubLogo } from '../../shared/components/vectors';
import styles from './styles';

const homeIcon = require('../../assets/home-icon.png');

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