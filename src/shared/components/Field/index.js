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
    Animated.timing(animations.field, {
      toValue: focused ? 60 : 50,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [focused]);
  
  useEffect(() => {
    Animated.timing(animations.error, {
      toValue: error && touched ? 17 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [error, touched]);

  return (
    <Fragment>
      <Animated.View style={[styles.field, { height: animations.field }]}>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={e => { onBlur(e); setFocused(false) }}
          secureTextEntry={placeholder === 'Password'}
          autoCompleteType="off"
          style={[
            styles.input,
            placeholder === 'Username' && styles.lowCase
          ]}
        />
      </Animated.View>
      <Animated.Text style={[styles.errorText, { height: animations.error }]}>
        { error }
      </Animated.Text>
    </Fragment>
  );

};
