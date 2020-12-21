import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BrandColors from '../config/BrandColors';
import AppText from './AppText';

function AppCard({item, onPress}) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.productImage} source={{
            uri: item.imageUri
            }}/>
            <View style={styles.details}>
                <AppText style={styles.title} numberOfLines={2}>{item.title}</AppText>
                <AppText style={styles.price}>{item.price}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 15,
      marginBottom: 20,
      backgroundColor: BrandColors.white,
      marginHorizontal: 5,
      overflow: "hidden",
      elevation: 5,
      shadowOffset: { width: 0, height: 1 },
      shadowColor: "#000",
      shadowOpacity: 0.4,
      shadowRadius: 2
    },
    details: {
      padding: 20
    },  
    productImage: {
      width: "100%",
      height: 250
    },
    price: {
      fontSize: 25,
      color: BrandColors.primary,
    },
    title: {
      color: BrandColors.secondary,
      fontSize: 30,
      fontWeight: "bold",
    }
  })
  

export default AppCard;