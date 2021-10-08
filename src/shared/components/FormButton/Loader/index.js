import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import styles from './styles';

export function Loader() {

  const animation = new Animated.Value(0);

  Animated.loop(
    Animated.timing(animation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: false
    })
  ).start(() => animation.setValue(0));

  const spinDeg = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Animated.View
      style={[
        styles.loader,
        { transform: [{ rotate: spinDeg }] }
      ]}
    />
  );
  
};