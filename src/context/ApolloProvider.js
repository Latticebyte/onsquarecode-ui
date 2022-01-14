import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { sha256 } from "crypto-hash";

import App from "../App";

const getDomainURL = () => process.env.REACT_APP_ON_SQUARE_CODE_API_URL;

// const link = new HttpLink({ uri: getDomainURL() });

// using persisted query link to cache the query results
const link = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true,
}).concat(new HttpLink({ uri: getDomainURL() }));

// For local setup
// const link = createPersistedQueryLink({
//   sha256,
//   useGETForHashedQueries: true,
// }).concat(new HttpLink({ uri: "http://localhost:4000" }));

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
