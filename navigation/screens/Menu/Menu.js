import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { Menu, Divider, Provider } from 'react-native-paper';
import  Icon from "react-native-vector-icons/Feather";


const CustomMenu = () => {
    const [showMenu, setShowMenu] = React.useState(false);
  
    return (
       
      <View style={{}}>
        <Menu
          visible={showMenu}
          onDismiss={() => setShowMenu(false)}
          anchor={
            <TouchableOpacity onPress={() => setShowMenu(true)}>
            <Icon name="more-vertical" color="white" size={25}/>
            </TouchableOpacity>
          }>
          <Menu.Item 
          style={styles.menuitem1}
          onPress={() => {}} title="Blue" />
          <Menu.Item 
          style={styles.menuitem1}
          onPress={() => {}} title="Green" />
          <Divider />
          <Menu.Item
          style={styles.menuitem1}
          onPress={() => {}} title="Yellow" />
        </Menu>
      </View>
   
    );
  };

  export default CustomMenu;

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      backgroundColor: "black"
    },
    menuitem1: {
        backgroundColor: "gray",
      },
    
  });
  