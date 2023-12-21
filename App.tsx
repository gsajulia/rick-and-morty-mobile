import React from "react";
import { View, Text } from "react-native";
import CharactersList from "./components/CharactersList/CharactersList";
import { ThemeProvider } from "styled-components";
import theme from "./globalTheme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "scroll",
                    backgroundColor: "#050A2E",
                }}
            >
                <CharactersList />
            </View>
        </ThemeProvider>
    );
}
