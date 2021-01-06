import React from 'react';
import Screen from './Screen';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import BrandColors from '../config/BrandColors';
import AppText from './AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppListItem({imageUrl, onPress, snippet, title}) {
    return (
        <TouchableHighlight
            underlayColor={BrandColors.medium}
            onPress={onPress}>
                <View style={styles.container}>
                <Image style={styles.image} source={{
                    uri: imageUrl
                }} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.snippet} numberOfLines={1}>{snippet}</AppText>
                </View>
                    <MaterialCommunityIcons color={BrandColors.black} size={25} name="chevron-left" />
                </View>
        </TouchableHighlight>
    );
}

export default AppListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: BrandColors.white,
        padding: 15
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: "500",
        fontSize: 20,
        color: BrandColors.black
    },
    snippet: {
        
    }
})