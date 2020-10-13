import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

export default class TextInutComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
    };
  }

  istoggle = () => {
    this.setState({isSelected: !this.state.isSelected});
  };

  render() {
    return (
      <View style={styles.textinputstyle}>
        <TextInput
          style={{
            fontSize: 15,
            padding: Platform.OS == 'ios' ? 10 : 6,
            color:'black',
            fontWeight:'700'
          }}
          autoCapitalize="none"
          placeholder={this.props.placeholder}
          {...this.props}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinputstyle: {
    //height: 40,
    width: '100%',
    marginVertical: 6,
    //marginTop: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 0,
    borderColor:'gray',
    elevation: 7,
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.9,
  },
});
