import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BrandColors from '../config/BrandColors';
import defaultStyles from '../config/Styles';


function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {/* icon */}
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} />}
            {/* text input */}
            <TextInput
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: BrandColors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        width: "98%",
    },
    icon: {
        color: BrandColors.medium,
        paddingRight: 5
    }
})
