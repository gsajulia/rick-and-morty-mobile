import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
});

const GET_CHARACTERS = gql`
    query GetCharacters {
        characters {
            results {
                id
                name
            }
        }
    }
`;

export default function App() {
    React.useEffect(() => {
        client
            .query({ query: GET_CHARACTERS })
            .then((response) => console.log(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <Text>Consultando a API do Rick and Morty...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
