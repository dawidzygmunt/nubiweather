# Weather Application

A full-stack weather application featuring a **NestJS backend** and a **React frontend**. The backend handles communication with WeatherAPI.com, while the frontend provides a modern, responsive interface for displaying real-time weather data and forecasts for Gliwice and Hamburg.

---

## Table of Contents

1. [Features](#features)
2. [Backend](#backend)
   - [Setup](#backend-setup)
   - [Endpoints](#backend-endpoints)
   - [Testing](#backend-testing)
3. [Frontend](#frontend)
   - [Setup](#frontend-setup)
   - [Running the Application](#running-the-application)
   - [Project Structure](#frontend-project-structure)
4. [Technologies Used](#technologies-used)
5. [Environment Variables](#environment-variables)
6. [Future Improvements](#future-improvements)

---

## Details

For more detailed information, please refer to the [Frontend README](frontend/react-ts/README.md) and [Backend README](backend/README.md).

### Backend

- Provides weather data for Gliwice and Hamburg.
- Current weather and multi-day weather forecast endpoints.
- In-memory caching (3 minutes) to reduce API calls.
- Robust error handling.
- Unit-tested codebase.
- Configurable environment settings.

### Frontend

- Real-time weather data display for two cities: Gliwice (Poland) and Hamburg (Germany).
- Current weather conditions include temperature and weather details.
- Multi-day weather forecast.
- Responsive design optimized for desktop and mobile.
- Modern UI with a clean design.

---

## Backend
