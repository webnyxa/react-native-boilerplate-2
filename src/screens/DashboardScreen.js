import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';
 import {Header} from "../components"

class DashboardScreen extends Component { 
  constructor(props){
    super(props)
  }
  render(){
     const {navigate} = this.props.navigation
      return(
          <SafeAreaView style = {{flex:1}}>
            <StatusBar backgroundColor="#1432A2" /> 
              <Header
                  onPress = {()=> this.props.navigation.openDrawer()}
                  onPress1 = {()=> navigate("EditProfile")}
                 
                  headerTxt = "DASHBOARD"
                  iconName = "navicon"
                  iconType = "EvilIcons"
                  rightIcon = {true}
                 
                />

          </SafeAreaView>
      )
  }

}
const styles = StyleSheet.create({ 
 
  
})

export default DashboardScreen;
