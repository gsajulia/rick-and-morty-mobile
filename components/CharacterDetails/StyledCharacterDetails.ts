import styled from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.background};
`;

export const Name = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.lightText};
    margin-bottom: 10px;
`;

export const CharacterImage = styled(Image)`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin-bottom: 20px;
`;

export const CharacterDetail = styled.Text`
    color: ${(props) => props.theme.colors.lightText};
`;
