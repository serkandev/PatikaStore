import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';
const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <View>
        <Text style={styles.headerText}>{product.title}</Text>
        <Text style={styles.priceText}>{product.price}</Text>
        <Text style={styles.inStockText}>
          {product.inStock ? '' : 'STOKTA YOK'}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
