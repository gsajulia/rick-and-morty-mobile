import { gql } from "@apollo/client";

export const GET_CHARACTER_DETAILS = gql`
    query GetCharacterDetails($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            image
            created
            location {
                id
                name
            }
            origin {
                id
                name
            }
            episode {
                id
                name
                air_date
            }
        }
    }
`;
