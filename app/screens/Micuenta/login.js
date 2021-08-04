import React from "react";
import {StyleSheet, View, Text, Image, ScrollView} from "react-native";
import {Divider } from "react-native-elements"
import { useNavigation } from "@react-navigation/native";




export default function Login() {

    
    return (
        <ScrollView>
            <Image
                source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
                resizeMode="contain"
                style={styles.logo}
            />

            <View style={styles.viewContainer}>
                <Text>Login Form</Text>
                <CreateCuenta/>
            </View>
            <Divider style={styles.divider}/>
            <Text>Social Login</Text>
        </ScrollView>



        
    )
}

function CreateCuenta(){
    const navigation = useNavigation();
    return (
        <Text style={styles.TextRegister}>
            A un no tienes cuenta?{" "}
            <Text 
                style={styles.btnRegister}
                onPress={() => navigation.navigate("registro")}
                >
                Registrate 
            </Text>
        </Text>
    );
}


const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height:150,
        marginTop:20,
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    TextRegister: {
        marginTop: 15,
        marginRight:10,
        marginLeft: 10,
    },
    btnRegister: {
       color: "#00a680",
       fontWeight: "bold" 
    },
    divider: {
        backgroundColor: "#00a680",
        margin: 40,
    }


})