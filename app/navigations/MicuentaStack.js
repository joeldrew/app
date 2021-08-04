import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MiCuenta from '../screens/Micuenta/MiCuenta';
import Login from '../screens/Micuenta/login';
import Registro from '../screens/Micuenta/Registro';

const Stack = createStackNavigator();

export default function MicuentaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            
            name="micuenta"
            component={MiCuenta}
            options={{ title:"Micuenta"}}
            
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{title:"Iniciar sesion"}}
            
            />
            <Stack.Screen
                name="registro"
                component={Registro}
                options={{title:"Registro"}}
            
            />
        </Stack.Navigator>
    )
}