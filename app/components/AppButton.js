import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import BrandColors from '../config/BrandColors';

function AppButton({title, onPress, color = BrandColors.primary}) {
    return (
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: BrandColors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        justifyContent: "center",
        alignContent: "center",
        width: "98%",
        padding: 15,
        marginVertical: 10,
    },  
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: BrandColors.white
    }
})