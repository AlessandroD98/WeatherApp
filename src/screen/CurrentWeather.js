import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
import { LinearGradient } from "expo-linear-gradient";

const CurrentWeather = ({ weatherData, city }) => {
  const {
    wrapper,
    container,
    tempStyle,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
    textColor,
    tempWrapper,
  } = styles;
  console.log(weatherData);

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView style={wrapper}>
      <LinearGradient colors={["#33d7f2", "#9ce4f0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
        <View style={container}>
          <Text style={[description, textColor]}>{city}</Text>
          <View style={tempWrapper}>
            <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
            <Text style={[tempStyle, textColor]}>{`${Math.round(temp)}°`}</Text>
          </View>
          <Text style={[feels, textColor]}>{`Feels like ${Math.round(feels_like)}°`}</Text>
          <RowText
            messageOne={`High: ${Math.round(temp_max)}° `}
            messageTwo={`Low: ${Math.round(temp_min)}°`}
            containerStyles={highLowWrapper}
            messageOneStyles={[highLow, textColor]}
            messageTwoStyles={[highLow, textColor]}
          />
        </View>
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyles={bodyWrapper}
          messageOneStyles={[description, textColor]}
          messageTwoStyles={[message, textColor]}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyle: {
    fontSize: 98,
  },
  feels: {
    fontSize: 30,
  },
  highLow: {
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 30,
  },
  textColor: {
    color: "white",
  },
  tempWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default CurrentWeather;
