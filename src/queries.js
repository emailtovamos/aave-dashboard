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

export const GET_GHO_FLASH_MINTS = gql`
  query GetGhoFlashMints {
    ghoFlashMints {
      amount
    }
  }
`;

export const GET_CHART_DATA = gql`
  query GetChartData {
    facilitators(first: 5) {
      id
      bucketLevel
    }
    ghoFlashMinters(first: 5) {
      id
      fee
    }
    ghoDiscounts(first: 5) {
      id
      discountRate
    }
  }
`;

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