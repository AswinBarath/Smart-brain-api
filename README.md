# Smart Brain API

<p>
<img src="assets/Smart brain React app.png" alt="Smart Brain App Cover design" width=800px />
</p>

The Face Recognition API for Smart-brain react app

---

## Table of content

- [Demo](#Demo)
- [Screenshots](#Screenshots)
- [Technologies](#Technologies)
- [What's unique in this Project](#whats-unique-in-this-project)
- [Setup Instructions](#setup-instructions)
- [Deployment to Vercel](#deployment-to-vercel)
- [Contributors](#Contributors)

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

**[⬆ Back to Top](#Smart-Brain-App)**