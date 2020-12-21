import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BrandColors from './app/config/BrandColors';
import AppCard from './app/components/AppCard';
import PizzaListingScreen from './app/screens/PizzaListingScreen';

export default function App() {
  return (
    // <FirstScreen />
    // <WelcomeScreen />
    <PizzaListingScreen />
  );
}

