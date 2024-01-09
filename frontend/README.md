<!-- Project Setup Backend-->
<!-- CMD -->

cd backend
Create .env file at root leavel & replace the keys that I provide you on gmail
npm install
npm run dev

<!-- Project Setup FrontEnd-->
<!-- CMD -->

cd ..
npm install
npm run dev

Frontend:

Sign-in & Sign-up Page:
Implement UI for user authentication using forms & validation via formik.
Connect these forms to backend endpoints for authentication and user creation.

Dashboard:
Design a simple dashboard displaying the count of registered Cars & Categories.
Fetch data from the backend API to populate this on dashboard.

CRUD for Categories & Cars:
Create UI components for managing categories and cars.
Implement forms for creating, reading, updating, and deleting categories and cars.
Implement dropdowns, input fields, and validation for car & categories details.
Each User have their own Categories & Cars.

Data Tables for Sorting & Pagination:
Use libraries like DataTables to display data in tables with sorting and pagination handle via Backend.

API Calling:
Using RTK Query with Toolkit for fetching data & performinh operation on data.

Backend:
User Authentication:
Implement a JWT-based authentication system for sign-up and sign-in.

Email Sending:
Use a service like SendGrid, Nodemailer, or a similar service to send welcome emails with randomly generated passwords.

CRUD Endpoints:
Create API endpoints for managing categories and cars, implementing CRUD operations.
Implement validation for data received from the frontend via formik.

Implement measures to prevent XSS attacks, such as input sanitization and output encoding.
