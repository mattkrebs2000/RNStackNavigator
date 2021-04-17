import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, View, TouchableOpacity} from 'react-native';
import Blue from "./Blue.js"
import Green from "./Green.js"
import Yellow from "./Yellow.js"
import Menu from "./Menu/Menu.js"
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/Feather";


const App = ({navigation}) => {
  // const [visit, setVisit] = useState(false);
 
 

  useEffect(() => {
    navigation.setOptions({
     
    //   headerLeft: () => (
    //     <TouchableOpacity>
    //     <View style={styles.container2}> 
    //     <Text style={styles.row}>
    //     {visit ? <Icon2 name="chevron-back" color="white" size={30} onPress={() => navigation.goBack()}/>: null}
    //     </Text>
    //  </View>
     
    //     </TouchableOpacity>
    //   ),
      headerRight: () => (
        <TouchableOpacity>
        

          <View style={styles.container2}>
          
          <Text style={styles.row}>
          <Icon2 name="refresh" color="white" size={30} onPress={() => navigation.navigate('Root', { screen: 'Blue' })}/></Text>
        
          <Text style={styles.row}>
          <Icon2 name="trash" color="white" size={30} onPress={() => navigation.navigate('Root', { screen: 'Blue' })}/></Text>
          <Text style={styles.row}>
          <Menu />
          </Text>
         
       </View>
        </TouchableOpacity>
      ),
      title: "HELLO",
      
    });
  }, []);




  return (
    <SafeAreaView style={styles.container}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>GoBlue</Text>
    <Button color="white" title="Go to Blue" onPress={() => navigation.navigate("Blue")} />
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>GoBlue</Text>
    <Button color="white" title="Go to Green" onPress={() => navigation.navigate("Green")} />
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>GoBlue</Text>
  <Button color="white" title="Go to Yellow" onPress={() => navigation.navigate("Yellow")} />
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "red"
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  text5: {
    fontSize: 12,
    color: "white",
    marginLeft: 10,
  },
  text6: {
    fontSize: 12,
    color: "white",
    marginRight: 10,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
flex: 1,
margin: 3,

  }
});

export default App;