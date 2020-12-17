import React from 'react';
import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children, style }) {
    return (
      <SafeAreaView style={[styles.container, style]}>
        <View style={style}>
            {children}
        </View>
      </SafeAreaView>
    );
}

export default Screen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    },
    view: {
        flex: 1,
    }
})