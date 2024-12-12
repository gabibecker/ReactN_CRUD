import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./View/UserList";
import UserForm from "./View/UserForm";
import { Button, Icon } from "react-native-elements";
import { UsersProvider } from "./context/UsersContext";

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}>
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({navigation}) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}
                                    onPress={() => navigation.navigate("UserForm")}
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Formulário de Usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </UsersProvider>
    );
};

const screenOptions = {
    headerStyle: {
        backgroundColor: '#F4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};