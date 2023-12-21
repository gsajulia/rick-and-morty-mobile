import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query GetCharacters {
        characters {
            results {
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
    }
`;
