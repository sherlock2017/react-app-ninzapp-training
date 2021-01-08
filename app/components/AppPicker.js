import React, { useState } from 'react';
import { StyleSheet, Button, View, TextInput, TouchableWithoutFeedback, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BrandColors from '../config/BrandColors';
import defaultStyles from '../config/Styles';
import AppButton from './AppButton';


function AppPicker({ icon, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {/* icon */}
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} />}
                    {/* text input */}
                    <TextInput
                        style={defaultStyles.text}
                        {...otherProps}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="fade">
               {/* close modal */}
               <AppButton title="Close" color="primary"
                    onPress={()=> setModalVisible(false)}
                />

                {/* display options */}
            </Modal> 
        </>
    );
}

export default AppPicker;

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
