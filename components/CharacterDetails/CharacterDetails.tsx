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

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) {
            return "";
        }

        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    return (
        <Styled.Container>
            <Styled.Details>
                <Styled.CharacterImage source={{ uri: character?.image }} />
                <Styled.Name>{character?.name}</Styled.Name>

                <Styled.CharacterDetails>
                    <Styled.DetailLabel>Status</Styled.DetailLabel>
                    <Styled.DetailValue>{character?.status}</Styled.DetailValue>
                </Styled.CharacterDetails>

                <Styled.CharacterDetails>
                    <Styled.DetailLabel>Species</Styled.DetailLabel>
                    <Styled.DetailValue>
                        {character?.species}
                    </Styled.DetailValue>
                </Styled.CharacterDetails>

                <Styled.CharacterDetails>
                    <Styled.DetailLabel>Gender</Styled.DetailLabel>
                    <Styled.DetailValue>{character?.gender}</Styled.DetailValue>
                </Styled.CharacterDetails>

                <Styled.CharacterDetails>
                    <Styled.DetailLabel>Created at</Styled.DetailLabel>
                    <Styled.DetailValue>
                        {character?.created && formatDate(character?.created)}
                    </Styled.DetailValue>
                </Styled.CharacterDetails>

                <Styled.CharacterDetails>
                    <Styled.DetailLabel>Location</Styled.DetailLabel>
                    <Styled.DetailValue>
                        {character?.location.name}
                    </Styled.DetailValue>
                </Styled.CharacterDetails>

                <Styled.CharacterDetails>
                    <Styled.DetailLabel>Origen</Styled.DetailLabel>
                    <Styled.DetailValue>
                        {character?.origin.name}
                    </Styled.DetailValue>
                </Styled.CharacterDetails>
            </Styled.Details>
        </Styled.Container>
    );
};

export default CharacterDetails;
