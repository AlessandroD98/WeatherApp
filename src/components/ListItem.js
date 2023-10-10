import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment/moment";
import { LinearGradient } from "expo-linear-gradient";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp, dataTextWrapper, container } = styles;
  return (
    <View style={container}>
      <LinearGradient
        colors={["rgb(2, 108, 223)", "rgb(0, 246, 253)"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={item}
      >
        <Feather name={weatherType[condition]?.icon} size={50} color={"white"} />
        <View style={dataTextWrapper}>
          <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
          <Text style={date}>{moment(dt_txt).format("H:mm")}</Text>
        </View>
        <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 20,
    flex: 1,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
  dataTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
