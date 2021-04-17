import React, {useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from 'react-native';
import Green from "./Green.js"
import Yellow from "./Yellow"

import { createStackNavigator } from '@react-navigation/stack';


const App = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
// headerLeft:null,
});
}, []);



  return (
    <SafeAreaView style={styles.container}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>GoGreen</Text>
    <Button color="white" title="Go to Green" onPress={() => navigation.navigate("Green")} />
  </View>
  <Text style={styles.text2}> Notice (sometimes)- No Back Button Shown</Text>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>GoYellow</Text>
  <Button color="white" style={styles.text} title="Go to Yellow" onPress={() => navigation.navigate("Yellow")} />
</View>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor:"blue",
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  text2: {
   color: "white"
  },
});

export default App;