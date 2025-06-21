# Deployment Checklist

## ✅ Pre-Deployment Steps

### 1. Environment Variables Setup
- [ ] Set `DATABASE_URL` in Vercel dashboard
- [ ] Set `CLARIFAI_API` in Vercel dashboard
- [ ] Verify database connection string format

### 2. Database Setup
- [ ] Create PostgreSQL database (Neon/Supabase/Railway)
- [ ] Run `npx prisma generate` locally
- [ ] Run `npx prisma db push` to sync schema
- [ ] Test database connection

### 3. Frontend Updates
- [ ] Update API base URL in React app
- [ ] Test all API endpoints locally
- [ ] Verify CORS settings

## ✅ Deployment Steps

### 1. API Deployment
```bash
# Deploy to Vercel
vercel --prod

# Check deployment logs
vercel logs
```

### 2. Database Migration
```bash
# Run production migration
npx prisma migrate deploy
```

### 3. Test API Endpoints
- [ ] Test `/` (health check)
- [ ] Test `/register` (user registration)
- [ ] Test `/signin` (user login)
- [ ] Test `/profile/:id` (get user profile)
- [ ] Test `/image` (update entries)
- [ ] Test `/imageurl` (Clarifai integration)

## ✅ Post-Deployment Verification

### 1. API Health Check
```bash
curl https://your-vercel-app.vercel.app/
# Should return: "success"
```

### 2. Database Connection
- [ ] Check Vercel function logs
- [ ] Verify Prisma client generation
- [ ] Test database queries

### 3. Frontend Integration
- [ ] Update React app API URL
- [ ] Test user registration
- [ ] Test user login
- [ ] Test image upload and face detection

## 🚨 Common Issues & Solutions

### Issue: "Prisma Client not generated"
**Solution:**
```bash
# In Vercel dashboard, add build command:
npm run build
```

### Issue: "Database connection failed"
**Solution:**
- Check `DATABASE_URL` format
- Verify database is accessible from Vercel
- Check SSL settings for production database

### Issue: "CORS errors"
**Solution:**
- Verify CORS middleware is enabled
- Check frontend URL is allowed

### Issue: "Environment variables not found"
**Solution:**
- Set variables in Vercel dashboard
- Redeploy after setting variables

## 📞 Support
If issues persist, check:
1. Vercel deployment logs
2. Database connection logs
3. Prisma client generation
4. Environment variable configuration 