import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CharactersList from "./components/CharactersList/CharactersList";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import { ThemeProvider } from "styled-components";
import theme from "./globalTheme";
import { RootStackParamList } from "./globalTypes";

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    const screenOptions = {
        headerStyle: {
            backgroundColor: theme.colors.deepBlack,
        },
        headerTintColor: theme.colors.lightText,
        headerTitleStyle: {
            fontWeight: "bold" as const,
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="CharactersList"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="CharactersList"
                        component={CharactersList}
                        options={{
                            title: "Rick and Morty Characters",
                        }}
                    />
                    <Stack.Screen
                        name="CharacterDetails"
                        component={CharacterDetails}
                        options={{
                            title: "Character Details",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
