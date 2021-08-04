import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export default function UserInvitado() {
    const navigation = useNavigation();


    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />

        <Text style={styles.title}>Consulta tu perfil</Text>
        
        <View style={styles.viewBtn}>
            <Button
                title="Ver tu perfil"
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate("login")}
        
            />
        </View>
        
        

        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight :30
    },
    image: {
        height: 300,
        width:"100%",
        marginBottom:40,
    },
    title: {
        fontWeight:"bold",
        fontSize:19,
        marginBottom: 10,
        textAlign: "center",
    },
    viewBtn : {
        flex: 1,
        alignItems : "center",
    },
    btnStyle: {
        backgroundColor: "#00a680",
    },
    btnContainer:{
        width: "70%"
    }
    
}) 

