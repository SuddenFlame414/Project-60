import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';

export default function App() {
  return (
    <View>
      <Text>
        <AppContainer/>
      </Text>
    </View>
  );
}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
})
const AppContainer = createAppContainer(AppNavigator);
