# Stage Zero Task API

This is a public API for the HNG12 Stage Zero Task. The API provides basic information such as your email address, the current datetime, and the GitHub repository URL.

## Features
- GET Endpoint: Returns a JSON response with email, current datetime, and GitHub repository URL.
- Lightweight and easy to use.
- Built with Node.js and Express.

## API Documentation

### Endpoint
GET /

### Response Format
The API returns the following JSON structure on a successful request:

json
{
  "email": "aghaken25@gmail.com",
  "current_datetime": "2025-01-28T12:00:00Z",
  "github_url": "https://github.com/DrApkFile/StageZero-Task"
}



### Setup Instructions
### Prerequisites
Before running this project, ensure you have the following:

Node.js installed on your system.

### Steps to Set Up Locally

Clone the repository

Use the following command to clone the repository:

git clone https://github.com/DrApkFile/StageZero-Task.git

cd StageZero-Task

### Install dependencies
Navigate to the project directory and install the required packages:

npm install

Start the server

Run the following command to start the server:

node index.js

### Access the API
Open your browser or an API client like Postman and navigate to:
http://localhost:3000/
You will receive a JSON response similar to:


{
  "email": "aghaken25@gmail.com",
  "current_datetime": "2025-01-28T12:00:00Z",
  "github_url": "https://github.com/DrApkFile/StageZero-Task"
}
Deployment
The API is deployed at a publicly accessible endpoint. Use the following URL to make a GET request:

https://stagezero-task.onrender.com
Project Details
Email: aghaken25@gmail.com
GitHub Repository: StageZero-Task