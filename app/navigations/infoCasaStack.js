import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import infocasas from '../screens/infocasas'


const Stack = createStackNavigator();

export default function Infocasas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            
            name="info-casas"
            component={infocasas}
            options={{ title:"Info ** Casas"}}
            
            />
        </Stack.Navigator>
    )
}