import { Platform, StatusBar, StyleSheet } from 'react-native';

const isAndroid = Platform.OS === 'android',
barHeight = StatusBar.currentHeight;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: isAndroid ? barHeight : 0
  }
});