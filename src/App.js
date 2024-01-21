import React from 'react';
import { ApolloProvider, useQuery } from '@apollo/client';
import client from './apolloClient';
import { GET_CHART_DATA, GET_GHO_FLASH_MINTS } from './queries';
import { BucketLevelBarChart, FeePieChart, DiscountRateLineChart } from './Charts';
import { GhoFlashMintsBarChart } from './Charts';


function DataDisplay() {
  const { loading, error, data } = useQuery(GET_GHO_FLASH_MINTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  

  return (
    <div>
      <GhoFlashMintsBarChart data={data.ghoFlashMints} />
      {/* <h2>Bucket Level Bar Chart</h2>
      <BucketLevelBarChart data={data.facilitators} />
      <h2>Fee Pie Chart</h2>
      <FeePieChart data={data.ghoFlashMinters} />
      <h2>Discount Rate Line Chart</h2>
      <DiscountRateLineChart data={data.ghoDiscounts} /> */}
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
