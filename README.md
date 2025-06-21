# Smart Brain API

<p>
<img src="assets/Smart brain React app.png" alt="Smart Brain App Cover design" width=800px />
</p>

The Face Recognition API for Smart-brain react app

---

## Table of content

- [Smart Brain API](#smart-brain-api)
  - [Table of content](#table-of-content)
  - [Demo](#demo)
  - [Screenshots](#screenshots)
    - [Home Page](#home-page)
    - [User Registeration Page](#user-registeration-page)
    - [User Login Page](#user-login-page)
  - [Technologies](#technologies)
  - [What's unique in this Project](#whats-unique-in-this-project)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Local Development](#local-development)
    - [Database Management](#database-management)
  - [Deployment to Vercel](#deployment-to-vercel)
    - [1. Database Setup](#1-database-setup)
    - [2. Vercel Deployment](#2-vercel-deployment)
    - [3. Database Migration (Production)](#3-database-migration-production)
  - [API Endpoints](#api-endpoints)
  - [Contributors](#contributors)
  - [Updates Since Postgres to Prisma Migration](#updates-since-postgres-to-prisma-migration)
- [Smart Brain API](#smart-brain-api-1)
  - [🚀 Features](#-features)
  - [📋 Table of Contents](#-table-of-contents)
  - [🛠 Tech Stack](#-tech-stack)
  - [🗄 Database Schema](#-database-schema)
    - [User Model](#user-model)
    - [Login Model](#login-model)
  - [🔌 API Endpoints](#-api-endpoints)
  - [🔧 Environment Variables](#-environment-variables)
  - [📦 Installation](#-installation)
  - [🔄 Database Migration History](#-database-migration-history)
    - [Migration from Knex to Prisma](#migration-from-knex-to-prisma)
      - [Key Changes Made:](#key-changes-made)
      - [Migration Files:](#migration-files)
  - [🆕 Recent Updates \& Fixes](#-recent-updates--fixes)
    - [1. CORS Configuration Fix](#1-cors-configuration-fix)
    - [2. Registration Logic Fix](#2-registration-logic-fix)
    - [3. Environment Variable Management](#3-environment-variable-management)
    - [4. Enhanced Error Logging](#4-enhanced-error-logging)
    - [5. Database Connection Testing](#5-database-connection-testing)
  - [🚀 Deployment](#-deployment)
    - [Vercel Deployment](#vercel-deployment)
    - [Build Configuration](#build-configuration)
  - [🧪 Testing](#-testing)
    - [Local Testing](#local-testing)
    - [Test Script](#test-script)
  - [📁 Project Structure](#-project-structure)
  - [🔒 Security Features](#-security-features)
  - [🤝 Contributing](#-contributing)
  - [📝 License](#-license)
  - [🆘 Troubleshooting](#-troubleshooting)
    - [Common Issues](#common-issues)
    - [Debug Endpoints](#debug-endpoints)

---

## Demo

<p>
  <img src="./assets/Smart brain React app demo-min.gif" alt="Smart Brain App Demo" width=800px />
</p>

---

## Screenshots

### Home Page

<p>
<img src="assets/Smart Brain App Home Page.PNG" alt="Smart Brain App Home Page" width=800px />
</p>

### User Registeration Page

<p>
<img src="assets/Smart Brain App Register Page.PNG" alt="Smart Brain App Register Page" width=800px />
</p>

### User Login Page

<p>
<img src="assets/Smart Brain App Sign In Page.PNG" alt="Smart Brain App Sign In Page" width=800px />
</p>


---

## Technologies

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
&nbsp;
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
&nbsp;
![Express JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
&nbsp;
![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
&nbsp;
![Node JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
&nbsp;
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
&nbsp;

---

## What's unique in this Project

- An Image Recognition app which makes an API request to face recognition machine learning model
- The App has built-in Authentication which takes care of the user login credentials securely through hashing
- User Ranking is provided each time the Smart Brain Web App service is triggered for facial detection of images
- The web app employs custom REST API on the backend with Prisma ORM and PostgreSQL for user data and hashed passwords

---

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- Clarifai API key

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Smart-brain-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` with your actual values:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `CLARIFAI_API`: Your Clarifai API key

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push schema to database (for development)
   npx prisma db push
   
   # Or run migrations (for production)
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run start:dev
   ```

### Database Management

- **View database in Prisma Studio:**
  ```bash
  npx prisma studio
  ```

- **Reset database:**
  ```bash
  npx prisma migrate reset
  ```

---

## Deployment to Vercel

### 1. Database Setup
- Create a PostgreSQL database (recommended: [Neon](https://neon.tech) or [Supabase](https://supabase.com))
- Get your database connection string

### 2. Vercel Deployment
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**
   - Go to your project in Vercel dashboard
   - Navigate to Settings → Environment Variables
   - Add:
     - `DATABASE_URL`: Your PostgreSQL connection string
     - `CLARIFAI_API`: Your Clarifai API key

4. **Deploy with Database**
   ```bash
   # Generate Prisma client for production
   npx prisma generate
   
   # Push schema to production database
   npx prisma db push --accept-data-loss
   
   # Deploy
   vercel --prod
   ```

### 3. Database Migration (Production)
```bash
# Run migrations on production database
npx prisma migrate deploy
```

---

## API Endpoints

- `POST /register` - Register a new user
- `POST /signin` - Sign in existing user
- `GET /profile/:id` - Get user profile
- `PUT /image` - Update user entries count
- `POST /imageurl` - Process image with Clarifai

---

## Contributors

- T Aswin Barath <https://github.com/AswinBarath>

---

## Updates Since Postgres to Prisma Migration

# Smart Brain API

A facial recognition web application backend built with Node.js, Express, and Prisma ORM. This API supports user registration, authentication, and image processing using the Clarifai API.

## 🚀 Features

- **User Authentication**: Secure registration and login with bcrypt password hashing
- **Facial Recognition**: Image processing using Clarifai API
- **Database Management**: PostgreSQL with Prisma ORM for type-safe database operations
- **CORS Support**: Configured for cross-origin requests from frontend applications
- **Production Ready**: Deployed on Vercel with environment variable management

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Database Migration History](#database-migration-history)
- [Recent Updates & Fixes](#recent-updates--fixes)
- [Deployment](#deployment)
- [Testing](#testing)

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: bcrypt-nodejs
- **Image Processing**: Clarifai API
- **Deployment**: Vercel
- **CORS**: Express CORS middleware

## 🗄 Database Schema

### User Model
```prisma
model User {
  id     Int      @id @default(autoincrement())
  name   String
  email  String   @unique
  joined DateTime @default(now())
  entries Int     @default(0)

  @@map("users")
}
```

### Login Model
```prisma
model Login {
  id    Int    @id @default(autoincrement())
  hash  String
  email String @unique

  @@map("login")
}
```

**Security Note**: Passwords are stored as hashed values in the `login` table, not in plain text in the `users` table. This follows security best practices.

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Health check | - |
| GET | `/test-db` | Database connection test | - |
| POST | `/register` | User registration | `{email, password, name}` |
| POST | `/signin` | User authentication | `{email, password}` |
| GET | `/profile/:id` | Get user profile | - |
| PUT | `/image` | Update user entries count | `{id}` |
| POST | `/imageurl` | Process image with Clarifai | `{input}` |

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# Clarifai API
CLARIFAI_API="your_clarifai_api_key_here"

# Server
PORT=3000
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Smart-brain-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your actual values
   ```

4. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

5. **Run database migrations**
   ```bash
   npx prisma migrate deploy
   ```

6. **Start the server**
   ```bash
   npm start
   ```

## 🔄 Database Migration History

### Migration from Knex to Prisma

This project was migrated from Knex.js to Prisma ORM for better type safety and developer experience.

#### Key Changes Made:

1. **Schema Definition**: Converted from Knex migrations to Prisma schema
2. **Database Client**: Replaced Knex with Prisma Client
3. **Query Syntax**: Updated all database queries to use Prisma syntax
4. **Type Safety**: Added TypeScript-like type safety with Prisma

#### Migration Files:
- `prisma/migrations/001_initial/migration.sql` - Initial schema creation

## 🆕 Recent Updates & Fixes

### 1. CORS Configuration Fix
**Issue**: Frontend application couldn't connect to backend due to CORS policy restrictions.

**Solution**: Updated CORS configuration in `server.js`:
```javascript
app.use(cors({
  origin: ['https://smart-brain-app-six.vercel.app', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### 2. Registration Logic Fix
**Issue**: Foreign key constraint violation when creating user records.

**Problem**: The original code tried to create `login` record before `user` record, violating the foreign key constraint.

**Solution**: Updated registration order in `controllers/register.js`:
```javascript
// Create user first, then login to satisfy FK constraint
const result = await prisma.$transaction(async (tx) => {
    // 1. Create user record first
    const user = await tx.user.create({
        data: { email, name, joined: new Date() }
    });
    
    // 2. Then create login record
    const login = await tx.login.create({
        data: { hash, email }
    });
    
    return user;
});
```

### 3. Environment Variable Management
**Issue**: Vercel deployment failed due to missing environment variables.

**Solution**: 
- Removed secret references from `vercel.json`
- Set up environment variables directly in Vercel dashboard
- Updated build script to include database migrations

### 4. Enhanced Error Logging
**Improvement**: Added detailed error logging for better debugging:
```javascript
console.error('Registration error details:', {
    message: err.message,
    code: err.code,
    meta: err.meta,
    stack: err.stack
});
```

### 5. Database Connection Testing
**Addition**: Created `/test-db` endpoint for database connectivity testing:
```javascript
app.get('/test-db', async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.json({ status: 'Database connection successful' });
    } catch (error) {
        res.status(500).json({ 
            status: 'Database connection failed', 
            error: error.message 
        });
    }
});
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Git repository**
2. **Set environment variables** in Vercel dashboard:
   - `DATABASE_URL`
   - `CLARIFAI_API`
3. **Deploy automatically** on git push

### Build Configuration
```json
{
  "build": "prisma generate && prisma migrate deploy",
  "postinstall": "prisma generate"
}
```

## 🧪 Testing

### Local Testing
1. Start the server: `npm start`
2. Test database connection: `GET http://localhost:3000/test-db`
3. Test registration: Use the provided `test-register.js` script

### Test Script
```bash
node test-register.js
```

## 📁 Project Structure

```
Smart-brain-api/
├── controllers/          # Route handlers
│   ├── register.js      # User registration
│   ├── signin.js        # User authentication
│   ├── profile.js       # User profile management
│   └── image.js         # Image processing
├── lib/
│   └── prisma.js        # Prisma client configuration
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Database migrations
├── server.js            # Express server setup
├── package.json         # Dependencies and scripts
└── vercel.json          # Vercel deployment config
```

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **CORS Protection**: Configured for specific origins
- **Input Validation**: Server-side validation for all endpoints
- **Database Constraints**: Foreign key constraints for data integrity

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure frontend domain is in CORS configuration
2. **Database Connection**: Check `DATABASE_URL` environment variable
3. **Registration Failures**: Verify database schema and foreign key constraints
4. **Migration Issues**: Run `npx prisma migrate deploy` to apply migrations

### Debug Endpoints
- `GET /test-db` - Test database connectivity
- Check server logs for detailed error messages

---

**Last Updated**: June 2025
**Version**: 2.0.0 (PostgreSQL + Prisma Migration)

---

**[⬆ Back to Top](#Smart-Brain-App)**