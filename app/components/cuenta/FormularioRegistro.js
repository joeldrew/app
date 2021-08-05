import React, {useState}  from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import {validateEmail} from "../../utils/Validations"
import { size, isEmpty } from "lodash";

export default function FormularioRegistro() {
    const [formData, setFormData] = useState(defaultFormValue());

    console.log(formData);
    const onSubmit = () => {
       // console.log(formData);
        if(
            isEmpty(formData.email) ||
            isEmpty(formData.password) ||
            isEmpty(formData.segundacontraseña)
            
            
            ){
            console.log("todos los campos son obligatorios");
        }else{
            console.log("todos llenos");
        }
    }

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text });
      };
    
    return(
        <View style={styles.formContainer}>

            <Input
                placeholder="correo electronico"
                containerStyle={styles.inputForm}
                onChange={(e) => onChange(e, "email")}
            />
            <Input
                placeholder="contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
                onChange={(e) => onChange(e, "password")}
            />
            <Input
                placeholder="Repetir Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
                onChange={(e) => onChange(e, "segundacontraseña")}
            />
            
            <Button
             title="Unirse"
             containerStyle={styles.btnContainerRegister}
             buttonStyle={styles.btnRegister}
             onPress={onSubmit}
            />

            
        </View>
    )
}

function defaultFormValue(){
    return{
        email: "",
        password: "",
        segundacontraseña:""


    }
};

const styles = StyleSheet.create({
    formContainer:{
        //flex: 1,
        //alignItems:"center",
        //justifyContent: "center",
        marginTop: 30,
    },
    inputForm:{
       width: "100%",
       marginTop: 20, 
    },
    btnContainerRegister:{
        marginTop: 20,
        width: "95%",
    },
    btnRegister:{
        backgroundColor: "#00a680"
    }

});