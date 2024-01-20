import { gql } from '@apollo/client';

// export const GET_FACILITATORS = gql`
//   query GetFacilitators {
//     facilitators {
//       id
//       bucketLevel
//       bucketCapacity
//       label
//     }
//   }
// `;

export const GET_DATA = gql`
  query GetData {
    protocols(first: 5) {
      id
      pools {
        id
      }
    }
    contractToPoolMappings(first: 5) {
      id
      pool {
        id
      }
    }
  }
`;