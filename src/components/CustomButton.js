import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


export default class ButtonCustom extends React.Component{


    render(){
        
        return <TouchableOpacity 
        {...this.props}
        activeOpacity = {0.8} onPress={this.props.onPress}
        style={[{
          width: '80%',
          alignSelf: 'center',
          borderRadius: 5,
          borderWidth:0.2,
          backgroundColor:"#003162"
         
        }, {...this.props.style}]}>
        <Text
          style={{
            alignSelf: 'center',
            padding: 12,
            fontSize: 13,
            fontWeight:'bold',
            color :'white'
          
          }}>
        {this.props.btnTxt}
        </Text>
      </TouchableOpacity>

    }
}
