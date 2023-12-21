import React from "react";
import { Text, View } from "react-native";
import { useQuery } from "@apollo/client";
import client from "../../apolloClient";
import { GET_CHARACTER_DETAILS } from "../../services/getCharacterDetail";
import * as Styled from "./StyledCharacterDetails";
import { TCharacterDetails } from "./CharacterDetailsTypes";

const CharacterDetails: React.FC<TCharacterDetails> = ({ route }) => {
    const { characterId } = route.params;
    const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
        variables: { id: characterId },
        client,
    });

    if (loading) return <Text>Carregando...</Text>;
    if (error) return <Text>Error :(</Text>;

    const character = data.character;

    return (
        <Styled.Container>
            <Styled.CharacterImage source={{ uri: character.image }} />
            <Styled.Name>{character.name}</Styled.Name>
            <Styled.CharacterDetail>
                Status: {character.status}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Espécie: {character.species}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Tipo: {character.type}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Gênero: {character.gender}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Criado em: {character.created}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Localização: {character.location.name}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Origem: {character.origin.name}
            </Styled.CharacterDetail>
        </Styled.Container>
    );
};

export default CharacterDetails;
