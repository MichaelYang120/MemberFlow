# MemberFlow
MemberFlow is a full-stack membership automation platform for subscription-based businesses. It streamlines member onboarding, billing integrations, cancellations, freezes, webhook processing, and admin reporting through scalable APIs, asynchronous job queues, and modern dashboard workflows.

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
