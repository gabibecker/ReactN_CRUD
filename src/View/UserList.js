import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import users from '../data/Users'
import { Avatar, Button, Icon, ListItem } from "react-native-elements";

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete', user.id)
                }
            },
            {
                text: 'Não'
            },
        ])
    }
    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUseritem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => {
                    props.navigation.navigate('UserForm', user)
                }}
            >
                <Avatar
                    source={{ uri: user.avatarUrl }}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
            </ListItem>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUseritem}
            />
        </View>
    )
}