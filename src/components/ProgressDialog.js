import React from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator, Dimensions,Image,Text } from "react-native";
const { width, height } = Dimensions.get("window");

class ProgressDialog extends React.PureComponent {
  render() {
    const { loading } = this.props;
    return loading ? (
      <View
        style={{
          backgroundColor: "#000000",
          opacity: 0.5,
          position: "absolute",
          height: height,
          width: width,
          justifyContent: "center",
          alignItems: "center",
          elevation: 3,
          shadowOpacity: 0.2,
          shadowRadius: 1,
          shadowOffset: { height: 3, width: 0 }
        }}>
                   
        <ActivityIndicator color="#003162" size="large" />

      </View>
    ) : null;
  }
}
ProgressDialog.defaultProps = {
  loading: false
};

ProgressDialog.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default ProgressDialog;
