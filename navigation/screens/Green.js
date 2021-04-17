import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from 'react-native';

import Yellow from "./Yellow"


const App = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
   
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>GoYellow</Text>
  <Button color="white" title="Go to Yellow" onPress={() => navigation.navigate("Yellow")} />
</View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "green"
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    color: "white",
  },
});

export default App;