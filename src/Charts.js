import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, // Corrected from 'Bar' to 'BarElement'
    LineElement,
    PointElement,
    PieController,
    BarController,
    LineController,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    PieController,
    BarController,
    LineController,
    Tooltip,
    Legend
  );

  export const GhoFlashMintsBarChart = ({ data }) => {
    const chartData = {
      labels: data.map((_, index) => `Mint ${index + 1}`),
      datasets: [{
        label: 'Amount',
        data: data.map(item => parseInt(item.amount, 10) / 1e18), // Converting to a more readable format
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }]
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  
    return <Bar data={chartData} options={options} />;
  };

export const BucketLevelBarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.id),
    datasets: [{
      label: 'Bucket Level',
      data: data.map(item => item.bucketLevel),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    }]
  };

  return <Bar data={chartData} />;
};

export const FeePieChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.id),
    datasets: [{
      data: data.map(item => item.fee),
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'],
    }]
  };

  return <Pie data={chartData} />;
};

export const DiscountRateLineChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.id),
    datasets: [{
      label: 'Discount Rate',
      data: data.map(item => item.discountRate),
      borderColor: 'green',
      fill: false,
    }]
  };

  return <Line data={chartData} />;
};
