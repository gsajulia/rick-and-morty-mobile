import React, { useContext, useEffect } from "react";
import { Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import client from "../../apolloClient";
import { GET_CHARACTERS } from "../../services/getCharacters";
import * as Styled from "./StyledCharactersList";
import { TNavigation } from "../../globalTypes";
import { TCharacter } from "../../globalTypes";
import { CharactersContext } from "../../context/CharacterContext";

const CharactersList = () => {
    const navigation = useNavigation<TNavigation>();
    const { loading, error, data } = useQuery(GET_CHARACTERS, { client });
    const { dispatch } = useContext(CharactersContext)!;

    useEffect(() => {
        if (data) {
            dispatch({
                type: "SET_CHARACTERS",
                payload: data.characters.results,
            });
        }
    }, [data]);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;

    const handleCharacterSelect = (character: TCharacter) => {
        navigation.navigate("CharacterDetails", { characterId: character.id });
    };

    return (
        <Styled.ListContainer>
            <Styled.Container>
                <FlatList
                    data={data.characters.results}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Styled.Card
                            onPress={() => handleCharacterSelect(item)}
                        >
                            <Styled.CharacterImage
                                source={{ uri: item.image }}
                            />
                            <Styled.Item>{item.name}</Styled.Item>
                        </Styled.Card>
                    )}
                />
            </Styled.Container>
        </Styled.ListContainer>
    );
};

export default CharactersList;
