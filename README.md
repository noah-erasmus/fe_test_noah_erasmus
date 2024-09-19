# Album Viewer

This project is a Next.js application that utilizes server-side rendering (SSR) and interfaces with the JSONPlaceholder API to display albums and their associated users. The application includes features such as album listing, photo display, search functionality, and user detail reveal with security measures.

## Features

- **Album Listing**: Fetches and displays a list of albums from the JSONPlaceholder API.
- **Photo Display**: Each album is displayed with its title and a representative image.
- **Search Functionality**: Users can filter displayed albums by title using a search bar.
- **User Details**:
  - Click on an album to reveal the user's name, website, and company details associated with it.
  - The user's email and phone contact information are partially hidden. To view the full details, users must solve a math problem (sum of two random two-digit numbers).
  - If the solution is incorrect, a new problem is generated. After two incorrect attempts, the user is locked out from viewing any contact information from any user, even after refreshing the page.
- **Associated Albums**: When viewing a user, all albums associated with that user are displayed and can be searched.

## Technologies Used

- **Next.js**: Utilized for server-side rendering and efficient routing.
- **React**: Used for building interactive and dynamic user interfaces.
- **JSONPlaceholder API**: Serves as the mock API for fetching albums and user data.
- **Fuse.js**: Used for implementing fuzzy search functionality.
- **LocalStorage**: Utilized for tracking failed attempts at solving math problems, ensuring security even after page refreshes.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/fe_test_noah_erasmus.git
   cd fe_test_noah_erasmus
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Run the development server**:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

1. **View Albums**: On the homepage, all albums are listed with their titles and photos.
2. **Search Albums**: Use the search bar at the top to filter albums by title.
3. **View User Details**: Click on an album to view the details of the user associated with that album, including their name, website, and company information.
4. **Reveal Contact Information**:
   - The user's email and phone number are partially hidden.
   - Solve the math problem to reveal the full contact details.
   - If the first attempt is incorrect, a new math problem is generated.
   - After two failed attempts, the user is locked out from viewing any contact information from any user.
5. **View Associated Albums**: When viewing a user's details, all albums associated with that user are displayed and can be searched.

## Development Process

- **Consistent Commits**: The repository maintains a consistent commit history to demonstrate the development process.
- **Error Handling**: The application gracefully handles potential errors, ensuring a smooth user experience.
- **Performance**: The search functionality and SSR ensure efficient performance, even with a large dataset.

## Evaluation Criteria

- **Code Quality**: The codebase is clean, well-organized, and thoroughly commented.
- **Functionality**: The application performs all the required tasks as outlined in the project brief.
- **UI/UX Design**: The interface is user-friendly and visually appealing, focusing on delivering a seamless experience.
