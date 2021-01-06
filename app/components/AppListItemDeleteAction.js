import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BrandColors from '../config/BrandColors';
import { TouchableHighlight } from 'react-native';

function AppListItemDeleteAction({onPress}) {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons size={35} color={BrandColors.white} name="trash-can"/>
            </View>
        </TouchableHighlight>
    );
}

export default AppListItemDeleteAction;

const styles = StyleSheet.create({
    container: {
      width: 100,
      backgroundColor: "tomato",
      justifyContent: "center",
        alignItems: "center",
      height: "100%"
    }
  })