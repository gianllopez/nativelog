import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  field: {
    justifyContent: 'center',
    width: '85%', height: 50,
    backgroundColor: '#E5E5E5',
    borderRadius: 7
  },
  label: {
    position: 'absolute',
    marginLeft: 10,
    fontFamily: 'Ubuntu',
    color: '#929292'
  },
  input: { flex: 1, paddingLeft: 10 }
});

export function Field() {

  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.field}>
      <Text style={styles.label}>
        Name
      </Text>
      <TextInput
        style={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};
