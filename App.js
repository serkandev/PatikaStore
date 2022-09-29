import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import ProductData from './product_data.json';
import ProductCard from './src/components/ProductCard';
import SearchBar from './src/components/SearchBar';
import {StatusBar} from 'react-native';
const App = () => {
  const RenderProduct = ({item}) => {
    return <ProductCard product={item} />;
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.title}>PATIKA STORE</Text>
      <SearchBar />
      <FlatList numColumns={2} data={ProductData} renderItem={RenderProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', marginHorizontal: 5},
  title: {
    color: 'purple',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
export default App;
