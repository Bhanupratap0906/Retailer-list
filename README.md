# Retailers Finder App

A mobile-friendly application that displays retailers near the user's location. Users can search, filter by category, and initiate contact via WhatsApp.

## Features

- Display retailers grouped by location
- Search functionality to filter retailers by name
- Category filtering
- Location filtering
- WhatsApp integration for direct messaging
- Geolocation support to sort retailers by distance
- Mobile-optimized UI

## Tech Stack

- React (with Vite)
- Context API for state management
- CSS for styling
- Browser Geolocation API

## Project Structure

```
retailers-app/
├── public/              # Public assets
├── src/
│   ├── components/      # React components
│   │   ├── AppHeader.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── LocationFilter.jsx
│   │   ├── RetailerCard.jsx
│   │   ├── RetailersList.jsx
│   │   └── SearchBar.jsx
│   ├── context/         # Context API for state management
│   │   └── RetailersContext.jsx
│   ├── styles/          # CSS styles
│   │   ├── AppHeader.css
│   │   ├── CategoryFilter.css
│   │   ├── LocationFilter.css
│   │   ├── RetailerCard.css
│   │   ├── RetailersList.css
│   │   └── SearchBar.css
│   ├── utils/           # Utility functions
│   │   ├── geolocation.js
│   │   └── mockData.js
│   ├── App.css          # Main app styles
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
└── index.html           # HTML template
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone <repository-url>
```

2. Navigate to the project directory:
```
cd retailers-app
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm run dev
```

5. Open your browser and visit:
```
http://localhost:5173
```

## Usage

- When you first open the app, it will ask for permission to access your location
- Use the search bar at the top to filter retailers by name
- Click on category buttons to filter retailers by category
- Use the location dropdown to filter retailers by location
- Click the WhatsApp button on any retailer card to start a conversation via WhatsApp

## Key Implementation Details

### State Management

The app uses React Context API for state management. The `RetailersContext` provides:

- List of retailers and filters
- Search functionality
- Category and location filtering
- User geolocation handling

### Geolocation

The app uses the browser's Geolocation API to get the user's current location and sort retailers by distance.

### Responsive Design

The UI is designed to be fully responsive and optimized for mobile devices with:

- Cards that adapt to screen size
- Proper spacing and typography for mobile readability
- Touch-friendly UI elements



