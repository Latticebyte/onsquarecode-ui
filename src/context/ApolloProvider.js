import React from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "../App";

const getDomainURL = () => {
  return process.env.ON_SQUARE_CODE_API_URL;
};

const link = createHttpLink({ uri: getDomainURL() });

// For local setup
// const link = createHttpLink({ uri: "http://localhost:4000" });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
