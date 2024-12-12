import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return(
        <View style = {style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChange={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={ user.name}
            />
            <Text>E-mail</Text>
            <TextInput
                style={style.input}
                onChange={email => setUser({...user, email})}
                placeholder="Informe o E-mail"
                value={ user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChange={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe o a URL do Avatar"
                value={ user.avatarUrl}
            />
            <Button 
                title={"Salvar"}
                onPress={() => {
                    navigation.goBack()
                }}
            />
        </View>
        
    )
}

const style = StyleSheet.create({
    form: {
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 18,
    }
})