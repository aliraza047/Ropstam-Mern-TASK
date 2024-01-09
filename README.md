Dummy Credential
Email: ropstam@yopmail.com
pass: cFkuVD
Create .env file at root leavel & replace the keys that I provide you on gmail

<!-- Project Setup Backend-->
<!-- CMD -->

npm install
npm run dev

<!-- Project Setup FrontEnd-->
<!-- CMD -->

cd frontend
npm install || npm install --legacy-peer-deps
npm run dev

Frontend:

Sign-in & Sign-up Page:
Implement UI(tailwind CSS) for user authentication using forms & validation via formik.
Connect these forms to backend endpoints for authentication and user creation.

After signup you can check your email or also backend clgs for password.
Kindly add SEND_GRID_API_KEY for testing otherwise check clg for password
Usually that password is one time by using you have to create own password but currently not implemented that feat not part of requirements.

Dashboard:
Design a simple dashboard displaying the count of registered Cars & Categories.
Fetch data from the backend API to populate this on dashboard.

CRUD for Categories & Cars:
Create UI components for managing categories and cars.
Implement forms for creating, reading, updating, and deleting categories and cars.
Implement dropdowns, input fields, and validation for car & categories details.
Each User have their own Categories & Cars.

Suggestions: On Deleted Categories you can also delete Car created with that Category

Data Tables for Sorting & Pagination:
Use libraries like DataTables to display data in tables with sorting and pagination handle via Backend.

API Calling:
Using RTK Query with Toolkit for fetching data & performing operation on data.

Backend:
User Authentication:
Implement a JWT-based authentication system for sign-up and sign-in.

Email Sending:
Use a service like SendGrid, Nodemailer, or a similar service to send welcome emails with randomly generated passwords.

CRUD Endpoints:
Create API endpoints for managing categories and cars, implementing CRUD operations.
Implement validation for data received from the frontend via formik.

Implement measures to prevent XSS attacks, such as input sanitization and output encoding.
