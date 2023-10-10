import React from "react";
import { View, Text } from "react-native";

const RowText = ({ messageOne, messageTwo, messageOneStyles, messageTwoStyles, containerStyles }) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
