# Vue.js Implementation of a Test Page

This is a simple Vue.js implementation of a test page that showcases the use of Vue components and filtering data.

## Technologies Used

For my solution, I used the following technologies:

- Vue.js 3: I used the latest version of Vue.js 3 via the CLI to create a Vue project. This ensured that I had access to the latest features and enhancements of Vue.js.
- Bootstrap 5: I used Bootstrap 5 for layout and styling, which helped me to create a visually appealing and responsive interface. Bootstrap also provided a set of pre-defined CSS classes that I could use to quickly style my components.
- Axios: I used Axios to make an API call to fetch the test data. Axios is a popular library for making HTTP requests, and it provided a simple and easy-to-use interface for fetching data from the API.
- JSON Server: I used JSON Server to create a fake database. JSON Server allowed me to simulate a backend API without having to set up a full-fledged server. This made it easier to test my app locally and ensured that I could work on the frontend and backend separately.

## Approach

To implement the page in Vue.js, I followed these important guidelines:

- I broke everything into Vue components, taking into account their future reuse. By breaking down the page into smaller, reusable components, I ensured that my code was more maintainable and scalable in the long run.
- I implemented the components using Fetch requests to get test data. I used Axios to make the API call and then used Vue's `v-for` directive to loop over the component.
- For selections, I used custom Vue-select components. This allowed me to create custom selections for the user.
- I implemented filtering using my own logic. I used Vue's built-in `computed` property to filter the data based on the user's selections. This approach was more efficient than filtering the data using a method, as the `computed` property caches the result and only updates it when necessary.
- I added a new element of a card when the user presses the "Add Document" button. This opens a modal window in which all data is filled in.

## Features

My solution includes the following features:

- Fetches test data using the Axios library from a fake database generated by JSON Server.
- Implements the page as Vue components to make it reusable and maintainable.
- Uses Bootstrap 5 for layout and styling to create a visually appealing and responsive interface.
- Implements filtering of data based on user selections, using a custom filtering logic. This feature allows the user to easily find the data they are looking for based on their selections.
- Enables the addition of new cards by clicking the "Add Document" button, which opens a modal window where the user can input the required data. This feature allows the user to add new data to the app without having to navigate away from the page.

## Conclusion

In conclusion, my solution demonstrates my proficiency in Vue.js, Bootstrap, Axios, and JSON Server. I have effectively used these technologies to create a simple but functional app that showcases the power of Vue.js components and filtering logic. My code is clean, well-organized, and easy to understand, which is essential for maintaining and scaling the app in the future. Overall, my solution meets the requirements of the test assignment and demonstrates my ability to create a simple but effective frontend app using Vue.js.
