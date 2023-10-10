import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground, View } from "react-native";
import ListItem from "../components/ListItem";
import { LinearGradient } from "expo-linear-gradient";

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <LinearGradient colors={["#33d7f2", "#9ce4f0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
        <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item) => item.dt_txt} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    //   backgroundColor: "royalblue",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
