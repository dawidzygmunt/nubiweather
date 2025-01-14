# Weather Application

## Overview

A responsive web application built with React and TailwindCSS that displays current weather conditions and forecasts for Gliwice and Hamburg using the WeatherAPI.com service.

## Features

- Real-time weather data display for two cities:
  - Gliwice, Poland
  - Hamburg, Germany
- Current weather information including:
  - Temperature
  - Weather conditions
- Multi-day weather forecast
- Responsive design optimized for both desktop and mobile devices
- Clean and modern user interface

## Technologies Used

- React 18
- Vite
- TailwindCSS
- WeatherAPI.com
- Axios for API requests
- React query
- Date-fns for date formatting

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dawidzygmunt/nubiweather.git
cd nubiweather
```

2. Install dependencies:

```bash
pnpm install
```

## Running the Application

To start the development server:

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`

To build for production:

```bash
pnpm run build
```

## Project Structure

```
src/
├── components/         # Reusable components
├── assets/          # Static assets
├── hooks/             # Custom React hooks
├── utils/             # Helper functions
├── lib/            # Configurations or abstractions
├── types/            # TypeScript type definitions
└── App.jsx           # Main application component
```

## API Integration

The application communicates with a server built in NestJS, which acts as a middleware for handling API requests to WeatherAPI.com. The NestJS server receives requests from the application, processes them, and sends queries to WeatherAPI.com to fetch weather data. This approach ensures better security, scalability, and separation of concerns.

The API integration is managed through a dedicated service module within the NestJS server, which handles all communication with WeatherAPI.com. Example endpoints used:

- Current weather: `/current.json`
- Forecast: `/forecast.json`

## Future Improvements

- Implement weather alerts
- Add historical weather data
- Include air quality information
- Add unit conversion (Celsius/Fahrenheit)
- Implement weather maps
