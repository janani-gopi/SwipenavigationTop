import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Setting from "./screens/Setting";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            textTransform: "uppercase",
          },
          activeTintColor:"white",
          inactiveTintColor:"#ffc30b",
          indicatorStyle: {
            height: null,  
            top: "10%",
            bottom: "10%",
            width: "45%",
            left: "2.5%",
            borderRadius: 100,
            backgroundColor: "#fada5e",
          },
          style: {
            alignSelf: "center",
            width: "70%",
            marginTop:40,
            marginBottom : 10,
            borderRadius: 100,
            borderColor: "red",
            backgroundColor: "white", 
            shadowRadius: 4, // shadow blur on iOS
          },
          tabStyle: {
            borderRadius: 100,
          },
        }}
        swipeEnabled={true}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Setting" component={Setting}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
