# Weather API

Simple NestJS API for fetching weather data for Gliwice and Hamburg.

## Features

- Current weather endpoint
- Weather forecast endpoint
- In-memory caching (3 minutes)
- Error handling
- Unit tests
- Environment configuration

## Setup

1. Clone repository
2. Install dependencies: `npm install`
3. Create `.env` file with WEATHER_API_KEY
4. Run: `npm run start`

## Endpoints

- GET /weather/realtime-weather
- GET /weather/forecast-weather?days=3

## Tests

Run: `npm run test`
