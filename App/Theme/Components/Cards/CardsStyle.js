import { StyleSheet, Dimensions } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    height: 100,
    width: width - 25,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
    letterSpacing: 3,
    fontSize: Fonts.size.small
  }
})
