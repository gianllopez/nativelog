import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    width: 225, height: 175,
    resizeMode: 'center',
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
    marginTop: 15,
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