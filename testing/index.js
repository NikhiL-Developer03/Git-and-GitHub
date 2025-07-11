const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Basic routes for testing
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Test Server!',
        status: 'Server is running successfully',
        timestamp: new Date().toISOString(),
        endpoints: {
            health: '/health',
            users: '/api/users',
            posts: '/api/posts',
            test: '/test'
        }
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        memory: process.memoryUsage()
    });
});

// Test endpoint with different HTTP methods
app.get('/test', (req, res) => {
    res.json({
        method: 'GET',
        message: 'GET request successful',
        query: req.query,
        timestamp: new Date().toISOString()
    });
});

app.post('/test', (req, res) => {
    res.json({
        method: 'POST',
        message: 'POST request successful',
        body: req.body,
        timestamp: new Date().toISOString()
    });
});

app.put('/test', (req, res) => {
    res.json({
        method: 'PUT',
        message: 'PUT request successful',
        body: req.body,
        timestamp: new Date().toISOString()
    });
});

app.delete('/test', (req, res) => {
    res.json({
        method: 'DELETE',
        message: 'DELETE request successful',
        timestamp: new Date().toISOString()
    });
});

// Mock API endpoints for testing
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

let posts = [
    { id: 1, title: 'First Post', content: 'This is the first post', userId: 1 },
    { id: 2, title: 'Second Post', content: 'This is the second post', userId: 2 },
    { id: 3, title: 'Third Post', content: 'This is the third post', userId: 1 }
];

// Users API
app.get('/api/users', (req, res) => {
    res.json({
        success: true,
        count: users.length,
        data: users
    });
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }
    res.json({
        success: true,
        data: user
    });
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: 'Name and email are required'
        });
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    });
});

// Posts API
app.get('/api/posts', (req, res) => {
    res.json({
        success: true,
        count: posts.length,
        data: posts
    });
});

app.get('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({
            success: false,
            message: 'Post not found'
        });
    }
    res.json({
        success: true,
        data: post
    });
});

app.post('/api/posts', (req, res) => {
    const { title, content, userId } = req.body;
    if (!title || !content || !userId) {
        return res.status(400).json({
            success: false,
            message: 'Title, content, and userId are required'
        });
    }
    
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        userId: parseInt(userId)
    };
    posts.push(newPost);
    
    res.status(201).json({
        success: true,
        message: 'Post created successfully',
        data: newPost
    });
});

// Error handling middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        availableRoutes: [
            'GET /',
            'GET /health',
            'GET /test',
            'POST /test',
            'PUT /test',
            'DELETE /test',
            'GET /api/users',
            'GET /api/users/:id',
            'POST /api/users',
            'GET /api/posts',
            'GET /api/posts/:id',
            'POST /api/posts'
        ]
    });
});

app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 Test Server Started Successfully!');
    console.log(`📍 Server running on: http://localhost:${PORT}`);
    console.log('📋 Available endpoints:');
    console.log('   GET  /           - Welcome message');
    console.log('   GET  /health     - Health check');
    console.log('   GET  /test       - Test GET request');
    console.log('   POST /test       - Test POST request');
    console.log('   PUT  /test       - Test PUT request');
    console.log('   DELETE /test     - Test DELETE request');
    console.log('   GET  /api/users  - Get all users');
    console.log('   POST /api/users  - Create new user');
    console.log('   GET  /api/posts  - Get all posts');
    console.log('   POST /api/posts  - Create new post');
    console.log('⭐ Ready for testing!');
});

module.exports = app;