// Import the axios library, which is a popular HTTP client for making API requests
import axios from "axios";

// Create an axios instance with a pre-configured baseURL and default headers
const apiClient = axios.create({
  // Set the baseURL for API requests, which is a mock API in this case
  baseURL:
    "https://my-json-server.typicode.com/RomanJarmukhametov/mockup-database",
  // Disable sending credentials such as cookies to the API
  withCredentials: false,
  // Set the default headers for all API requests
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Export an object containing methods for making API requests related to cards
export default {
  // Method to fetch all cards from the API
  getCards() {
    return apiClient.get("/cards");
  },
  // Method to add a new card to the API
  addCard(card) {
    // Set a unique id for the new card based on the current timestamp
    card.id = Date.now();
    // Make a POST request to the API to create a new card with the given data
    return apiClient.post("/cards", card);
  },
};
