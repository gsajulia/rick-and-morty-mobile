import React from "react";
import { FlatList, Text } from "react-native";
import { useQuery } from "@apollo/client";
import client from "../../apolloClient";
import { GET_CHARACTERS } from "../../services/getCharacters";
import * as Styled from "./StyledCharactersList";

const CharactersList = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, { client });

    if (loading) return <Text>Carregando...</Text>;
    if (error) return <Text>Error :(</Text>;

    return (
        <Styled.Container>
            <Styled.Header>Rick and Morty</Styled.Header>
            <FlatList
                data={data.characters.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Styled.Card>
                        <Styled.CharacterImage source={{ uri: item.image }} />
                        <Styled.Item>{item.name}</Styled.Item>
                    </Styled.Card>
                )}
            />
        </Styled.Container>
    );
};

export default CharactersList;
