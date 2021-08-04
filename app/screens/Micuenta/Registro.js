import React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormularioRegistro from "../../components/cuenta/FormularioRegistro";


export default function() {

    

    return(
        <KeyboardAwareScrollView>
            <Image
                source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
                resizeMode = "contain"
                style={styles.logo}
            />
            <View style={styles.viewForm}>
                <FormularioRegistro/>
            </View>
            
        
        </KeyboardAwareScrollView>
        
    )
}



const styles = StyleSheet.create({

        logo: {
            width: "100%",
            height: 150,
            marginTop: 20,
        },
        viewForm: {
            marginRight: 40,
            marginLeft: 40,
        }

});