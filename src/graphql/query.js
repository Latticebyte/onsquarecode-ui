import { gql } from "@apollo/client";

export const GET_CODE = gql`
  query getCode($codeId: ID!) {
    getCode(codeId: $codeId) {
      id
      description
      language
      codeBlock
      createdAt
    }
  }
`;

export const GET_ALL_CODES = gql`
  query getAllCodes {
    getAllCodes {
      id
      description
      language
      codeBlock
      createdAt
    }
  }
`;
