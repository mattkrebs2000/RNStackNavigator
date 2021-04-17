import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Button } from 'react-native';



const App = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Yellow</Text>
    <Button color="red" title="Go to Red" onPress={() => navigation.navigate('Root', { screen: 'Red' })}/>

  

  </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "yellow"
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