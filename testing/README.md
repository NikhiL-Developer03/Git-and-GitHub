# Testing Server

A simple Express.js server for testing API endpoints and HTTP methods.

## Features

- 🚀 Express.js server with CORS support
- 📊 Health check endpoint
- 🔄 REST API endpoints for testing
- 👥 Mock Users API
- 📝 Mock Posts API
- ⚡ Multiple HTTP methods support (GET, POST, PUT, DELETE)
- 🛡️ Error handling middleware

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## Available Endpoints

### Base Endpoints
- `GET /` - Welcome message with server info
- `GET /health` - Health check and server status

### Test Endpoints
- `GET /test` - Test GET request
- `POST /test` - Test POST request
- `PUT /test` - Test PUT request
- `DELETE /test` - Test DELETE request

### Users API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user

### Posts API
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create new post

## Usage Examples

### Test Basic Endpoint
```bash
curl http://localhost:3000/
```

### Health Check
```bash
curl http://localhost:3000/health
```

### Get All Users
```bash
curl http://localhost:3000/api/users
```

### Create New User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "New User", "email": "newuser@example.com"}'
```

### Create New Post
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "New Post", "content": "Post content", "userId": 1}'
```

### Test Different HTTP Methods
```bash
# GET
curl http://localhost:3000/test

# POST
curl -X POST http://localhost:3000/test \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello World"}'

# PUT
curl -X PUT http://localhost:3000/test \
  -H "Content-Type: application/json" \
  -d '{"update": "data"}'

# DELETE
curl -X DELETE http://localhost:3000/test
```

## Default Data

### Users
- John Doe (john@example.com)
- Jane Smith (jane@example.com)
- Bob Johnson (bob@example.com)

### Posts
- "First Post" by User 1
- "Second Post" by User 2
- "Third Post" by User 1

## Server Configuration

- **Port**: 3000 (configurable via PORT environment variable)
- **CORS**: Enabled for all origins
- **JSON parsing**: Enabled
- **Static files**: Served from `public` directory

## Development

The server includes:
- Express.js framework
- CORS middleware
- JSON body parsing
- Error handling
- Logging
- Static file serving

Perfect for testing HTTP requests, API development, and learning Express.js!
