import React, {useState} from 'react';
import Screen from '../components/Screen';
import { Text, Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

function FirstScreen(props) {
    //console.log(require("../assets/adaptive-icon.png"));
    const [ count, setCount ] = useState(0);

    const increment = () => {
        setCount(count  + 1);
        //console.log(count);
    }

    const clearCart = () => {
        setCount(0);
        //console.log(count);
    }
  
    return (
        <Screen style={styles.container}>
            <Image source={{
                width: 200,
                height: 200,
                uri: "https://freepngimg.com/thumb/pizza/1-pizza-png-image-thumb.png"
            }} />            
            <AppButton title="Add Pizza" color="tomato" onPress={increment} />
            {count != 0 && <AppButton title="Clear Cart" color="dodgerblue" onPress={clearCart} /> }
            {count != 0 && <Text style={styles.cart}>Pizza Cart</Text> }
            {count != 0 && <Text style={styles.cartCount}>{ count }</Text>}
        </Screen>
    );
}

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },  
    cart: {
        fontSize: 30,
        padding: 2,
        //fontWeight: 500
    },
    cartCount: {
        fontSize: 90,
        //fontWeight: 600
    }
})