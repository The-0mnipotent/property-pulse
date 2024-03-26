# Property Pulse

## Description

Property Pulse is a comprehensive real estate platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js), offering a seamless experience for users searching, listing, renting, and selling properties. With Google OAuth integration, users can securely authenticate and manage their profiles, while property owners can easily list their properties for rent or sale. Property Pulse facilitates secure CRUD operations, enabling users to create, read, update, and delete their listings and profiles. Featuring intuitive property search functionality and detailed property listings.

## Features

- Property listing management
- User authentication via Google OAuth
- User profile management
- CRUD operations for user profiles and listings
- Property search functionality
- Detailed property listings with images and descriptions


## Screenshots

### Home Page
![image](https://github.com/The-0mnipotent/property-pulse/assets/80109914/99509e42-a645-4294-a0d8-78c5588e8c42)

### User Profile 
![image](https://github.com/The-0mnipotent/property-pulse/assets/80109914/99f4098c-664a-49ed-a197-139f2062efe2)

### Property Page
![image](https://github.com/The-0mnipotent/property-pulse/assets/80109914/ec57da2b-c050-46c5-8af8-094a41ea7329)

### Update/Add Property Listing
![image](https://github.com/The-0mnipotent/property-pulse/assets/80109914/97cc7996-3388-4ae2-b7a0-f35e716684b1)

### Secure SignIn/SignUp
![image](https://github.com/The-0mnipotent/property-pulse/assets/80109914/acbef6d8-087b-43bc-9a57-122c90ddd3ad)

## Installation

To install Property Pulse, follow these steps:

1. Clone this repository: `git clone https://github.com/The-0mnipotent/property-pulse.git`
2. Navigate to the project directory: `cd property-pulse`
3. Install dependencies: `npm install`
4. Go to Client folder and run `npm install` again.

## Usage

To use Property Pulse, follow these steps:

1. Configure the database settings in `api/index,js`.
2. Initiate mongoDB database and save its configuration in .env file.
3. Create new JWT_Secret in the same .env file.
4. Initiate firebase authentication and firebase database and save configuration firebase.js file.
5. Save VITE_FIREBASE_API_KEY in .env file.

## Running

1. In terminal run the application: `npm start`
2. Open another terminal, Go to `cd client` and run the frontend application: `npm start`.
4. Access the application through your web browser at `http://localhost:3000`.

## Tech Stack

### Client Side/Front-end

- @reduxjs/toolkit: 1.9.5
- react: 18.2.0
- react-dom: 18.2.0
- react-icons: 4.10.1
- react-redux: 8.1.2
- react-router-dom: 6.15.0
- redux-persist: 6.0.0
- swiper: 10.2.0

### API Side/Backend

- firebase: 10.3.1
- bcryptjs: 2.4.3
- cookie-parser: 1.4.6
- dotenv: 16.3.1
- express: 4.18.2
- jsonwebtoken: 9.0.2
- mongoose: 7.5.0

#### Google OAuth

## Contributing

Contributions are welcome! Please follow these guidelines:
- Fork the repository
- Create your branch: `git checkout -b feature-name`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin feature-name`
- Submit a pull request

## Contact

For questions or feedback, please contact [Arpit Singh](https://arpit-singh.netlify.app/) at [arpitsingh92741@gmail.com].
