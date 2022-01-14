import { gql } from "@apollo/client";

export const CREATE_CODE = gql`
  mutation createCode(
    $description: String!
    $language: String!
    $codeBlock: String!
  ) {
    createCode(
      description: $description
      language: $language
      codeBlock: $codeBlock
    ) {
      id
      description
      language
      codeBlock
      createdAt
    }
  }
`;

export const UPDATE_CODE = gql`
  mutation updateCode(
    $codeId: ID!
    $description: String!
    $language: String!
    $codeBlock: String!
  ) {
    updateCode(
      codeId: $codeId
      description: $description
      language: $language
      codeBlock: $codeBlock
    ) {
      id
      description
      language
      codeBlock
      createdAt
    }
  }
`;

export const DELETE_CODE = gql`
  mutation deleteGoal($codeId: ID!) {
    deleteCode(codeId: $codeId)
  }
`;

export const DELETE_ALL_CODES = gql`
  mutation deleteAllCodes {
    deleteAllCodes
  }
`;
