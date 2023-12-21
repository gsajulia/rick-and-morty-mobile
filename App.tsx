import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components";
import theme from "./globalTheme";
import CharactersList from "./components/CharactersList/CharactersList";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import {
    StackNavigationOptions,
    TransitionPresets,
} from "@react-navigation/stack";
import { RootStackParamList } from "./globalTypes";

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    const screenOptions: StackNavigationOptions = {
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
            backgroundColor: theme.colors.deepBlack,
        },
        headerTintColor: theme.colors.lightText,
        headerTitleStyle: {
            fontWeight: "bold" as const,
        },
        headerShown: false,
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
                            headerShown: true,
                        }}
                    />
                    <Stack.Screen
                        name="CharacterDetails"
                        component={CharacterDetails}
                        options={{
                            title: "Character Details",
                            headerShown: true,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
