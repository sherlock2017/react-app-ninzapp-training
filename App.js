import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BrandColors from './app/config/BrandColors';
import AppCard from './app/components/AppCard';
import PizzaListingScreen from './app/screens/PizzaListingScreen';
import AppText from './app/components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppListItem from './app/components/AppListItem';
import AppListItemDeleteAction from './app/components/AppListItemDeleteAction';
import MessageScreen from './app/screens/MessageScreen';

export default function App() {
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
    <MessageScreen />
  );
}

const styles = StyleSheet.create({
  temp: {
    width: 100,
    backgroundColor: "tomato"
  }
})

