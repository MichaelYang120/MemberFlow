# MemberFlow
MemberFlow is a full-stack membership automation platform for subscription-based businesses. It streamlines member onboarding, billing integrations, cancellations, freezes, webhook processing, and admin reporting through scalable APIs, asynchronous job queues, and modern dashboard workflows.

## To run the project locally:
1. Clone the repository:
2. cd into the project directory:
3. docker-compose up --build
4. Access the frontend at http://localhost:5173

### Troubleshooting guide:
- If you encounter issues with Docker, ensure that Docker Desktop is installed and running on your machine.
- Check the terminal output for any error messages during the build or startup process.
- If the frontend does not load, verify that the backend services are running correctly and that there are no port conflicts.
- Run `docker-compose logs` to view logs from all services and identify any issues with service startup or connectivity.
- Run `docker-compose down` to stop and remove all containers, then try `docker-compose up --build` again to rebuild the images and start fresh.
- Run `docker-compose logs memberflow-backend` to view logs specific to the backend service for more detailed error information.
- Run `docker-compose logs memberflow-frontend` to view logs specific to the frontend service for more detailed error information.


## May 10, 2026
### Key Features
Established frontend and backend architecture and configured Docker-based development and production environments. The platform uses React for the frontend and Node.js with Express.js for the backend. Containerization enables scalable deployment, consistent local development, and simplified environment management.

### Authentication Flow
Added Login and Logout functionality using placeholder authentication state management in React. Implemented conditional rendering based on user session state and created protected UI flow between Login and Member Details pages.

### Frontend Components
Built and styled:
- Login form component
- Logout navigation/header
- Member Details page with placeholder content
- Responsive authentication UI layout

### State Management
Implemented React `useState`-based authentication flow for managing active user session state and component rendering.

## May 11, 2026
### Added Registration Flow
Implemented user registration functionality with client-side form validation and React state management.
Created a registration form component that captures user credentials and updates the application authentication state upon successful registration.
Added Email validation using regex to ensure proper email format during registration. 
Added conditional rendering logic to dynamically switch between Login, Register, and Member Details views based on active authentication and user session state.
Fixed deprecation warnings in React components and updated dependencies to ensure compatibility with the latest React version. Fixed css issue with middle alignment.

## May 12, 2026
### Added Registration Flow
Added logic to the registration form component to capture user credentials and update the application authentication state upon successful registration.
### Backend Authentication API
Built a REST-based authentication API using Express.js and PostgreSQL. Added user registration endpoint integration between the React frontend and backend services.
Used mvc architecture to separate concerns between the frontend and backend services, ensuring a clean codebase and maintainable structure.
### Database Integration
Configured PostgreSQL database connectivity and implemented persistent user storage using SQL queries and service-layer architecture. Added Dockerized database initialization and container networking for local development.

## May 13, 2026
### Authentication State Persistence
Implemented persistent authentication state management using browser `localStorage` and React `useEffect`. The application now restores active user sessions on page reload and clears stored session data during logout workflows.
### Error Handling and User Feedback
Added frontend error handling for authentication API requests and implemented user-facing feedback for failed login and registration attempts. Introduced React-based error state management for improved authentication flow reliability and user experience.
### Login backend integration
Integrated the login form with the backend authentication API, allowing users to authenticate against the database and manage their session state based on API responses.
### Developer Documentation
Added local installation and setup documentation for Docker-based development environments, including frontend access instructions and backend service configuration.
### Troubleshooting Guide
Added troubleshooting documentation covering Docker configuration, container lifecycle management, service connectivity validation, and log inspection commands for debugging local development issues.

## May 14, 2026
### JWT Authentication Integration
Implemented JWT-based authentication using `jsonwebtoken` for secure session management between the React frontend and Express.js backend. Added token generation during login and registration workflows and integrated token persistence using browser `localStorage`.
### Persistent Token Session Management
Added React state synchronization for authentication token storage and automatic session restoration across page reloads. Implemented token cleanup during logout workflows to maintain secure client-side session handling.
### Backend Authorization Infrastructure
Added backend JWT token generation utilities and integrated token-based authentication responses into REST API login and registration endpoints using Express.js controllers and service-layer architecture.
### Frontend Authentication Updates
Updated Login and Registration components to handle authentication tokens returned from backend API responses and maintain authenticated application state across protected workflows.

## May 15, 2026
### Updated environmental variables

## May 18, 2026
### Fixed registration flow bug
This bug was caused by registering and the logging out, when you are logged out you are not at the login page, but the Register page.

## May 24, 2026
Updated App.tsx file, and created Home.tsx file. MemberDetails was moved to Home.tsx file. This was done to create a better flow for the user, and to have a more organized file structure. The Home.tsx file will be the main page for the user after they log in, and it will contain the MemberDetails component.
Also added a plans onto the Home.tsx file, this is just a placeholder for now, but it will be used to display the different plans that the user can subscribe to in the future. This is just a basic implementation, and it will be expanded upon in the future to include more features and functionality.
