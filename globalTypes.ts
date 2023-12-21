import { StackNavigationProp } from "@react-navigation/stack";

type TCharacterLocation = {
    id: string;
    name: string;
};

type TCharacterOrigin = {
    id: string;
    name: string;
};

type TCharacterEpisode = {
    id: string;
    name: string;
    air_date: string;
};

export type TCharacter = {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;
    location: TCharacterLocation;
    origin: TCharacterOrigin;
    episode: TCharacterEpisode;
};

type CharacterDetailsParams = {
    characterId: string;
};

export type RootStackParamList = {
    CharactersList: undefined;
    CharacterDetails: CharacterDetailsParams;
};

export type TNavigation = StackNavigationProp<RootStackParamList>;
