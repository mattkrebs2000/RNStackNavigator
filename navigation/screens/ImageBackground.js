import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, View, TouchableOpacity, ImageBackground} from 'react-native';
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
 
  const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/main.jpg",
  };
  const header = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/menu.png",
  };


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
          <Icon2 name="refresh" color="white" size={25} onPress={() => navigation.navigate('Root', { screen: 'Blue' })}/></Text>
        
          <Text style={styles.row}>
          <Icon2 name="trash" color="white" size={25} onPress={() => navigation.navigate('Root', { screen: 'Blue' })}/></Text>
          <Text style={styles.row1}>
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
    <ImageBackground source={image} style={styles.image}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>GoBlue</Text>
    <Button color="white" title="Go to Blue" onPress={() => navigation.navigate("Blue")} />
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>GoGreen</Text>
    <Button color="white" title="Go to Green" onPress={() => navigation.navigate("Green")} />
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{ color:"white" }}>GoYellow</Text>
  <Button color="white" title="Go to Yellow" onPress={() => navigation.navigate("Yellow")} />
</View>
</ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
 
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

  },
  row1: {
    flex: 1,
    margin: 3,
    marginTop:7,
    
      },
      image: {
       
        marginLeft: 0,
        marginRight: 5,
        height: "105%",
        width: "105%"
        
                 
      },
});

export default App;