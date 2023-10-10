import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View, TextComponent } from "react-native";
import IconText from "../components/IconText";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";

const City = ({ weatherData, extraInfo }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  const { main } = extraInfo;

  const {
    container,
    cityName,
    countryName,
    populationWrapper,
    rowLayout,
    populationText,
    riseSetWrapper,
    riseSetText,
    cityText,
    imageLayout,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <LinearGradient colors={["#33d7f2", "#9ce4f0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            title={""}
            iconName={"user"}
            iconColor={"white"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            title={"sunrise"}
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            title={"sunset"}
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("H:mm:ss")}
            bodyTextStyles={riseSetText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            title={"umidity"}
            iconName={"waves"}
            iconColor={"white"}
            bodyText={`${main.humidity}%`}
            bodyTextStyles={riseSetText}
          />
          <IconText
            title={"pressure"}
            iconName={"thermometer"}
            iconColor={"white"}
            bodyText={`${main.pressure} hPa`}
            bodyTextStyles={riseSetText}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
    marginTop: 10,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "white",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
