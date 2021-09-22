import React, { useEffect, useState } from 'react';
import { TextInput, Animated } from 'react-native';
import styles from './styles';

export function Field(props) {

  let { placeholder } = props;

  const [fieldAnim] = useState(new Animated.Value(50));
  const [focused, setFocused] = useState(false);

  useEffect(() => {    
    Animated.timing(fieldAnim, {
      toValue: focused ? 60 : 50,
      duration: 250,
      useNativeDriver: false
    }).start();
  }, [focused]);

  return (
    <Animated.View style={[styles.field, { height: fieldAnim }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Animated.View>
  );

};
