import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const IconText = ({ iconName, iconColor, bodyText, bodyTextStyles, title }) => {
  const { textTheme, container, description } = styles;
  return (
    <View style={container}>
      <Text style={description}>{title}</Text>
      {title === "umidity" ? (
        <MaterialIcons name={iconName} size={50} color={iconColor} />
      ) : (
        <Feather name={iconName} size={50} color={iconColor} />
      )}
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    flex: 1,
    padding: 30,
    borderWidth: 0,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "rgba(255, 255, 255, 0.22)",
  },
  textTheme: {
    fontWeight: "bold",
    marginTop: 5,
  },
  description: {
    alignSelf: "flex-start",
    color: "white",
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

export default IconText;
