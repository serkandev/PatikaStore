import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';
const SearchBar = () => {
  return <TextInput placeholder="Ara..." style={styles.container} />;
};

export default SearchBar;
