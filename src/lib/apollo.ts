import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4po727p1zcd01xx2eyb5g4e/master',
  cache: new InMemoryCache()
})