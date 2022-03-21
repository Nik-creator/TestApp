import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        episode {
          id
          name
          episode
        }
        name
        type
        image
        gender
      }
    }
  }
`;