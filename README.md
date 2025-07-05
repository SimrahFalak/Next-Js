

# Next.js Learning Project

This project was initiated to explore and understand the fundamentals of building web applications using **Next.js**. It covers key concepts such as routing, nested routes, dynamic routes, and nested dynamic routes using the App Router (`/app` directory).

## Features Covered

* Project Initialization with `create-next-app`
* App Router structure using the `/app` directory
* Static Routes
* Nested Routes
* Dynamic Routes
* Nested Dynamic Routes

## Folder Structure

```
/app
├── page.js                 // Home page
├── about
│   └── page.js             // About page
├── profile
│   └── page.js             // Profile page
├── products
│   ├── page.js             // Products listing
│   └── [id]
│       ├── page.js         // Dynamic product detail page e.g., /products/1
│       └── reviews
│           └── [reviewId]
│               └── page.js // Nested dynamic review page e.g., /products/1/reviews/1
├── blogs
│   ├── page.js             // Blogs listing
│   ├── first
│   │   └── page.js         // First blog page
│   └── second
│       └── page.js         // Second blog page
```

## How to Run

```bash
npm install
npm run dev
```

Visit: `http://localhost:3000`

## Purpose

This repository serves as a practical reference while learning core features of Next.js, focusing on routing and project structure.
