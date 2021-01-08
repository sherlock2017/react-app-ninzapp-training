import React, { useState } from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Switch} from 'react-native';
import BrandColors from './app/config/BrandColors';
import AppCard from './app/components/AppCard';
import PizzaListingScreen from './app/screens/PizzaListingScreen';
import AppText from './app/components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppListItem from './app/components/AppListItem';
import AppListItemDeleteAction from './app/components/AppListItemDeleteAction';
import MessageScreen from './app/screens/MessageScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import AppButton from './app/components/AppButton';


export default function App() {
  const [pizzaName,setPizzaName] = useState('');
  const [freePizza,setFreePizza] = useState(true);
  return (
    // <FirstScreen />
    // <WelcomeScreen />
    // <PizzaListingScreen />
    // <AppListItem
    //   imageUrl="https://spiderimg.amarujala.com/assets/images/2019/08/01/750x506/zomato-online-food-delivery-service_1564668206.jpeg"
    //   title="Vijay"
    //   snippet="Hi Where are you. Trying to locate you for so long...for so long...for so long...for so long...for so long...for so long...for so long..."
    //   renderRightActions={() => <AppListItemDeleteAction onPress={() => alert('yes!')}/>}
    // />
    // <MessageScreen />
    <Screen>
      <AppTextInput
        placeholder="Pizza Name"
        icon="phone"
        keyboardType="numeric"
      />

      <AppPicker
        icon="apps"
        placeholder="Category" />
      
      {/* register */}
      <AppButton title="Register" color="secondary"
                    onPress={()=> alert("Register yourself")}
                ></AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  temp: {
    width: 100,
    backgroundColor: "tomato"
  }
})

