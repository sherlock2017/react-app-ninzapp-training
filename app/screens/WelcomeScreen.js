import React from 'react';
import { Alert, ImageBackground, Image, Text, StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import BrandColors from '../config/BrandColors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={8}
            style={styles.background}
            source={{
                uri: "https://www.itl.cat/pngfile/big/297-2975386_pizza-for-mobile-pizza-wallpaper-for-mobile.jpg"
            }}
        >
            <View style={styles.container}>
                {/* logo */}
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://images.vexels.com/media/users/3/131779/isolated/preview/3d4929d289ad98ad71637d5c257d2f08-pizza-logo-1-by-vexels.png"
                    }}
                />

                {/* tagline */}
                <AppText style={styles.tagline}>Pizza Anytime</AppText>

                {/* login */}
                <AppButton title="Login" color="primary" onPress={() =>
                    Alert.alert("Welcome", "Proceed to Login", [
                        {
                            text: "Login",
                            onPress: () => console.log("login")
                        },
                        {
                            text: "Cancel",
                            onPress: () => console.log("cancel")
                        }
                    ])
                }></AppButton>

                {/* register */}
                <AppButton title="Register" color="secondary"
                    onPress={()=> alert("Register yourself")}
                ></AppButton>
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%"
    },
    logo: {
        width: 200,
        height: 200
    },
    tagline: {
        color: BrandColors.white,
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "Roboto",
        marginBottom: 50
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})