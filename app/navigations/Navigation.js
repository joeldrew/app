import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from 'react-native-elements/dist/icons/Icon'


import infoCasaStack from './infoCasaStack'
import ListaStack from './ListaStack';
import MapaStack from './MapaStack';
import MicuentaStack from './MicuentaStack'

  

const Tab = createBottomTabNavigator();


export default function Navigation(){
    return (

        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="Mapa"
            tabBarOptions={{
                inactiveTintColor : "#646464",
                activeTintColor: "#00a680",
            }}
            
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route,color),
            })} 

            >
                
                <Tab.Screen 
                    name="Mapa" 
                    component={MapaStack}
                    options={{title:"Mapa"}}    
                />
                <Tab.Screen 
                    name="Micuenta" 
                    component={MicuentaStack}
                    options={{title:"Micuenta"}}    
                />
                <Tab.Screen 
                    name="lista" 
                    component={ListaStack}
                    options={{title:"Lista"}}    
                />
                <Tab.Screen 
                    name="infocasas" 
                    component={infoCasaStack}
                    options={{title:"Info Casa"}}    
                />
            </Tab.Navigator>
        </NavigationContainer>

    )
}


function screenOptions(route,color){
    let iconName;

        switch(route.name){
            case "Mapa":
                iconName = "map-plus"
                break;
            case "lista":
                    iconName = "heart-outline"
                    break;
            case "infocasas":
                    iconName = "star-outline"
                    break;
            default:
                break;
        }
        return(
            <Icon type="material-community" name={iconName} size={22} color={color} />
        )
}