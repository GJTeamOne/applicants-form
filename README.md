---
Applicant Management System
---

## Overview

This Applicant Management System is a React-based application designed to handle the registration of applicants. It features a user-friendly interface for adding, removing, and managing applicants, including the designation of a primary applicant.

## Features

- **Add Applicant**: Users can add new applicants, capturing details such as first name, last name, mobile number, and email address.
- **Remove Applicant**: Allows the removal of existing applicants from the list.
- **Primary Applicant Selection**: Users can designate one applicant as the primary contact. The first applicant is set as primary by default.
- **Unique Information**: The application ensures that each applicant has a unique combination of first name, last name, and email, as well as a unique mobile number.
- **Local State Management**: Utilizes React's state management for real-time UI updates and data handling.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For adding type safety to the JavaScript code.
- **TailwindCSS**: For styling the application.
- **Vite**: As the build tool and development environment.

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone [repository-url]
   cd [repository-name]

1. **Install Dependencies**:

   ```bash
   npm install

2. **Run the Application**:

   ```bash
   npm run dev

- Access the application at http://127.0.0.1:5173/.

## Usage
- Adding an Applicant: Fill in the form fields and click the 'Add Applicant' button.
- Setting a Primary Applicant: Click the checkbox next to an applicant to set them as primary.
- Removing an Applicant: Click the 'Remove' button next to an applicant's details.
- Viewing Submitted Applicants: The right-hand side displays a list of submitted applicants.

## Future Enhancements
- Integrate with a backend server and database for persistent data storage.
- Implement user authentication and authorization for secure access.
- Extend functionality to include more detailed applicant profiles.
