import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Lista from '../screens/Lista'


const Stack = createStackNavigator();

export default function ListaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            
            name="info-casas"
            component={Lista}
            options={{ title:"Lista"}}
            
            />
        </Stack.Navigator>
    )
}