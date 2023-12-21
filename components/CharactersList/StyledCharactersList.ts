import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;
    padding-top: 22px;
`;

export const ListContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    background: ${(props) => props.theme.colors.deepBlack};
`;

export const Item = styled.Text`
    padding: 10px;
    font-size: 18px;
`;

export const Card = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6,
})`
    flex: 1;
    flex-direction: row;
    margin: 10px;
    background-color: #fff;
    border-radius: 6px;
    shadow-color: #000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.3;
    shadow-radius: 1px;
    padding: 24px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
`;

export const CharacterImage = styled(Image)`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;
