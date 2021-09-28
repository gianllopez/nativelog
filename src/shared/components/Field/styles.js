import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  field: {
    width: '85%',
    borderRadius: 7,
    backgroundColor: '#E5E5E5'
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontFamily: 'Ubuntu'
  },
  lowCase: { textTransform: 'lowercase' },
  errorText: {
    width: '85%',
    marginTop: 2.5, marginBottom: 5,
    fontFamily: 'Ubuntu Bold',
    color: '#FF5F6E'
  }
});