# Pokémon Search Application

## Overview

This application is a Pokémon search tool that allows users to find Pokémon by name and navigate through their details. It was created to provide a seamless and intuitive way for Pokémon enthusiasts to explore detailed data about their favorite Pokémon. The app leverages the comprehensive Pokémon API to pull data dynamically, featuring real-time searching, detail display, navigation through Pokémon entries, and efficient API usage through caching.

## Technologies Used

- **React**: Chosen for its efficient rendering and state management capabilities, React allows the app to handle dynamic content updates smoothly, which is essential for the real-time search functionality.
- **Node.js**: Provides the runtime environment for executing JavaScript on the server, enabling a unified language for both client-side and server-side scripts.
- **npm**: Used for managing all the project's dependencies, ensuring that all necessary React components and libraries are easily installable.
- **Tailwind CSS**: Selected for its utility-first approach, which accelerates custom styling processes without stepping out of the HTML markup, enhancing developer productivity and maintaining consistency across different components.
- **AbortController**: Integrated to manage API request cancellation, crucial for handling the rapid send and cancellation of requests in real-time search functionalities, improving resource utilization and user experience.
- **React Hooks**: Utilized for managing state and lifecycle features in functional components, promoting cleaner and more readable code by encapsulating state-related logic.
- **Pokémon API**: [PokéAPI](https://pokeapi.co) was chosen for its extensive dataset on Pokémon, enabling the app to provide comprehensive information, including statistics, abilities, and evolutionary data, which enrich the user's experience.

## Features

- **Search by Pokémon Name**: Users can enter a name to fetch and display detailed information about Pokémon.
- **Caching Mechanism**: Implements caching to reduce the number of API requests, minimize latency, and decrease the load on the server.
- **Pagination**: Users can navigate between Pokémon entries using "Previous" and "Next" buttons, making the browsing experience seamless.
- **Error Handling**: Implements user-friendly error messages and feedback on API fetch failures, enhancing the overall usability.
- **Responsive Design**: Ensures that the application is fully functional and looks great on different device screens from mobiles to desktops.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://npmjs.com/) (typically comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lipamaoa/Pokemon-Searcher.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Pokemon-Searcher
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```plaintext
   http://localhost:5173
   ```

## Usage

After launching the application, use the search bar to type the name of the Pokémon you're interested in. The app will display the Pokémon details below the search bar. You can use the "Previous" and "Next" buttons to navigate through Pokémon entries based on their ID.

## Future Enhancements

- **Improve error handling**: Enhance feedback and facilitate debugging by explicitly handling different HTTP status codes. This will involve mapping these codes to user-friendly messages and improving the visibility of these errors in the development environment.

## Licence

This project is open source and available under the MIT License.

## Contact

- **Filipa Santos** - [filipa.ferreirasilva@gmail.com](mailto:filipa.ferreirasilva@gmail.com)
- **GitHub Profile** - [https://github.com/lipamaoa](https://github.com/lipamaoa)
- **Project Link** - [https://github.com/lipamaoa/Pokemon-Searcher](https://github.com/lipamaoa/Pokemon-Searcher)
