import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { TextInput, Animated, Text } from 'react-native';
import styles from './styles';

export function Field(props) {

  let { onChange, onBlur, value, placeholder, error, touched } = props;

  const [focused, setFocused] = useState(false);
  const [animations] = useState({
    field: new Animated.Value(50),
    error: new Animated.Value(0)
  });

  useEffect(() => {  
    Animated.timing(fieldAnim, {
      toValue: focused ? 60 : 50,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [focused]);
  
  useEffect(() => {
    Animated.timing(errorAnim, {
      toValue: error ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [error]);

  return (
    <Fragment>
      <Animated.View style={[styles.field, { height: fieldAnim }]}>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={e => { onBlur(e); setFocused(false) }}
          style={[
            styles.input,
            placeholder === 'Username' && styles.lowCase
          ]}
          />
      </Animated.View>
      <Animated.Text style={[styles.errorText, { opacity: errorAnim }]}>
        Complete name must be at leat 22 characters
      </Animated.Text>
    </Fragment>
  );

};
