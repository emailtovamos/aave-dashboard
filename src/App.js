import React from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import client from './apolloClient';
import { GET_DATA } from './queries';

function DataDisplay() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Protocols</h2>
      {data.protocols.map(protocol => (
        <div key={protocol.id}>
          <p>Protocol ID: {protocol.id}</p>
          {protocol.pools.map(pool => (
            <p key={pool.id}>Pool ID: {pool.id}</p>
          ))}
        </div>
      ))}
      <h2>Contract to Pool Mappings</h2>
      {data.contractToPoolMappings.map(mapping => (
        <div key={mapping.id}>
          <p>Mapping ID: {mapping.id}</p>
          <p>Pool ID: {mapping.pool.id}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Aave Dashboard</h1>
        <DataDisplay />
      </div>
    </ApolloProvider>
  );
}

export default App;
