import React, { useContext } from "react";
import * as Styled from "./StyledCharacterDetails";
import { TCharacterDetails } from "./CharacterDetailsTypes";
import { CharactersContext } from "../../context/CharacterContext";
import { TCharacter } from "../../globalTypes";

const CharacterDetails: React.FC<TCharacterDetails> = ({ route }) => {
    const { characterId } = route.params;
    const { state } = useContext(CharactersContext)!;

    const character = state.characters.find(
        (character: TCharacter) => character.id === characterId
    );

    return (
        <Styled.Container>
            <Styled.CharacterImage source={{ uri: character?.image }} />
            <Styled.Name>{character?.name}</Styled.Name>
            <Styled.CharacterDetail>
                Status: {character?.status}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Espécie: {character?.species}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Tipo: {character?.type}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Gênero: {character?.gender}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Criado em: {character?.created}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Localização: {character?.location.name}
            </Styled.CharacterDetail>
            <Styled.CharacterDetail>
                Origem: {character?.origin.name}
            </Styled.CharacterDetail>
        </Styled.Container>
    );
};

export default CharacterDetails;
