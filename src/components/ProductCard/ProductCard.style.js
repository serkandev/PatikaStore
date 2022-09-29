import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,

    borderRadius: 10,
    resizeMode: 'contain',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 5,
  },
  priceText: {fontWeight: 'bold'},
  inStockText: {color: 'red', fontWeight: 'bold'},
});
