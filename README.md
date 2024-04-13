# Project Overview 🚀

Welcome to the project overview section. In this project, we have developed a RESTful API using Node.js, Express, and MongoDB for managing user data. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on user records stored in a MongoDB database.

---

## Features ✨

- **Create User**: Users can create a new user by sending a POST request to the `/users` endpoint with user data in the request body.
- **Get All Users**: Users can retrieve all existing users by sending a GET request to the `/users` endpoint.
- **Get User by ID**: Users can retrieve a specific user by their ID using a GET request to the `/users/:id` endpoint.
- **Update User**: Users can update an existing user's information by sending a PUT request to the `/users/:id` endpoint with updated user data in the request body.
- **Delete User**: Users can delete an existing user by sending a DELETE request to the `/users/:id` endpoint with the user's ID.

---

## Code Concepts 🧠

- **Express Middleware**: We use Express middleware to parse incoming JSON requests and handle error responses.
- **MongoDB Integration**: We connect to a MongoDB database using Mongoose and define a schema for our user data.
- **CRUD Operations**: We implement CRUD operations (Create, Read, Update, Delete) using Mongoose methods like `save()`, `find()`, `findById()`, `findByIdAndUpdate()`, and `findByIdAndDelete()`.
- **Error Handling**: We handle errors gracefully using try-catch blocks and send appropriate HTTP status codes and error messages in the response.



---

## Postman Screenshots 📸

- **Create a new user**:
![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/8184109f-dd33-48e7-aafa-15c166a4b64d)


![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/b702b634-35de-4fb7-a6fb-d93bba48e277)


![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/d2a294c5-9dc9-4db1-9ac6-7b1ab80f4a69)




- **Retrieve all users**:

![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/a07661dc-e2d5-4787-a1e8-69d867abd061)


- **Retrieve a single user by id**:

![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/af477a71-3d1d-4b7a-82a4-9e1e2ca4359e)


- **Update an existing user**:

![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/b3d04955-94a9-4940-a4e7-0e2a4fdf1336)

 ![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/18a8ab43-a89d-4b25-b077-43e768bebfc5)

- **Delete a user**:

![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/17cd38e7-aec3-4a38-86a3-a099348dc5e0)

![image](https://github.com/Arshpreet-Singh-1/CRUD_NODEJS_EXPRESS_MONGODB/assets/84027648/09f68676-796a-43f4-8156-b26276060207)



---

## Learning Outcomes 📚

- **Node.js and Express**: Gain proficiency in building web applications with Node.js and Express.
- **MongoDB and Mongoose**: Learn how to integrate MongoDB with Node.js applications using Mongoose for data modeling and interactions.
- **RESTful API Design**: Understand the principles of RESTful API design and implement CRUD operations using HTTP methods.
- **Error Handling**: Learn how to handle errors in an Express application and send meaningful error responses to clients.
- **Asynchronous Programming**: Practice working with asynchronous code in Node.js using async/await for handling database operations.

