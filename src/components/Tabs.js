import React from "react";
import CurrentWeather from "../screen/CurrentWeather";
import UpcomingWeather from "../screen/UpcomingWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import City from "../screen/City";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  console.log(weather);
  return (
    <LinearGradient colors={["#33d7f2", "#9ce4f0"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "rgb(2, 108, 223)",
          tabBarInactiveTintColor: "grey",
          tabBarStyle: {
            backgroundColor: "white",
          },
          headerStyle: {
            backgroundColor: "white",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "black",
            textTransform: "uppercase",
          },
        }}
      >
        <Tab.Screen
          name={"Current"}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={"droplet"} size={25} color={focused ? "rgb(2, 108, 223)" : "lightgray"} />
            ),
          }}
        >
          {() => <CurrentWeather weatherData={weather.list[0]} city={weather.city.name} />}
        </Tab.Screen>
        <Tab.Screen
          name={"Upcoming"}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={"clock"} size={25} color={focused ? "rgb(2, 108, 223)" : "lightgray"} />
            ),
          }}
        >
          {() => <UpcomingWeather weatherData={weather.list} />}
        </Tab.Screen>
        <Tab.Screen
          name={"City"}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={"home"} size={25} color={focused ? "rgb(2, 108, 223)" : "lightgray"} />
            ),
          }}
        >
          {() => <City weatherData={weather.city} extraInfo={weather.list[0]} />}
        </Tab.Screen>
      </Tab.Navigator>
    </LinearGradient>
  );
};

export default Tabs;
